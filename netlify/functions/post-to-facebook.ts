// Netlify Scheduled Function: postet das neueste KA-Life Infografik-Item
// als Foto-Post auf die KA-Life Facebook-Seite.
//
// Cron: Samstags 10:30 Uhr CEST (08:30 UTC) -- 30 Min nach dem Cron-Build,
// damit das neue rss.xml schon deployed ist.
//
// Manueller Trigger: GET /.netlify/functions/post-to-facebook?secret=<MANUAL_TRIGGER_SECRET>
//
// Environment Variables (in Netlify Site Settings -> Environment):
//   FACEBOOK_PAGE_ID            -- z.B. 61574348422781
//   FACEBOOK_PAGE_ACCESS_TOKEN  -- Long-Lived Page Token
//   MANUAL_TRIGGER_SECRET       -- frei waehlbares Geheimnis fuer manuellen Test
//   FB_FORCE_POST               -- optional "1": ignoriert State, postet trotzdem (manueller Test)

import type { Config, Context } from "@netlify/functions";
import { getStore } from "@netlify/blobs";

const RSS_URL = "https://ka-life.de/rss.xml";
const FB_GRAPH_VERSION = "v21.0";

interface RssItem {
  guid: string;
  title: string;
  link: string;
  description: string;
  imageUrl: string | null;
  pubDate: string;
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

// Strip CDATA wrappers and HTML tags, return plain text.
function plainTextFromCData(raw: string): string {
  let s = raw.trim();
  // remove leading <![CDATA[ and trailing ]]>
  if (s.startsWith("<![CDATA[")) {
    s = s.slice("<![CDATA[".length);
    if (s.endsWith("]]>")) s = s.slice(0, -3);
  }
  // Convert <br/> and </p><p> to newlines.
  s = s.replace(/<br\s*\/?>/gi, "\n");
  s = s.replace(/<\/p>\s*<p[^>]*>/gi, "\n\n");
  s = s.replace(/<\/?p[^>]*>/gi, "");
  // Strip remaining tags including <img>.
  s = s.replace(/<[^>]+>/g, "");
  s = decodeEntities(s);
  // collapse 3+ newlines to 2
  s = s.replace(/\n{3,}/g, "\n\n");
  return s.trim();
}

function extractTag(xml: string, tag: string): string | null {
  // Capture content between <tag> and </tag>, including CDATA, multiline.
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`);
  const m = xml.match(re);
  return m ? m[1] : null;
}

function extractAttr(xml: string, tag: string, attr: string): string | null {
  // <enclosure url="..." />, <media:content url="..." ... />
  const re = new RegExp(`<${tag}\\b[^>]*\\b${attr}=["']([^"']+)["'][^>]*>`);
  const m = xml.match(re);
  return m ? m[1] : null;
}

async function fetchLatestRssItem(): Promise<RssItem | null> {
  const res = await fetch(RSS_URL, {
    headers: { "Cache-Control": "no-cache" },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch RSS feed: ${res.status} ${res.statusText}`);
  }
  const xml = await res.text();

  // Find first <item> ... </item>
  const itemMatch = xml.match(/<item>([\s\S]*?)<\/item>/);
  if (!itemMatch) return null;
  const itemXml = itemMatch[1];

  const title = decodeEntities((extractTag(itemXml, "title") || "").trim());
  const link = decodeEntities((extractTag(itemXml, "link") || "").trim());
  const guid = decodeEntities((extractTag(itemXml, "guid") || link).trim());
  const pubDate = (extractTag(itemXml, "pubDate") || "").trim();
  const descRaw = extractTag(itemXml, "description") || "";
  const description = plainTextFromCData(descRaw);
  const imageUrl =
    extractAttr(itemXml, "enclosure", "url") ||
    extractAttr(itemXml, "media:content", "url") ||
    extractAttr(itemXml, "media:thumbnail", "url");

  return { guid, title, link, description, imageUrl, pubDate };
}

interface PostResult {
  ok: boolean;
  message: string;
  fbPostId?: string;
  postedItem?: { guid: string; title: string };
}

async function postPhotoToFacebook(
  pageId: string,
  pageAccessToken: string,
  imageUrl: string,
  caption: string,
): Promise<{ id?: string; post_id?: string; error?: any }> {
  const url = `https://graph.facebook.com/${FB_GRAPH_VERSION}/${pageId}/photos`;
  const params = new URLSearchParams({
    url: imageUrl,
    caption,
    published: "true",
    access_token: pageAccessToken,
  });
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });
  const json = await res.json();
  if (!res.ok) {
    return { error: json };
  }
  return json;
}

export default async (req: Request, _context: Context): Promise<Response> => {
  // Manual trigger requires secret query param; scheduled invocations skip this check.
  const isScheduled =
    req.headers.get("user-agent")?.includes("Netlify") ||
    req.headers.get("x-trigger") === "scheduled";

  const url = new URL(req.url);
  const querySecret = url.searchParams.get("secret");
  const force = url.searchParams.get("force") === "1" || process.env.FB_FORCE_POST === "1";

  const manualSecret = process.env.MANUAL_TRIGGER_SECRET;
  if (!isScheduled && manualSecret && querySecret !== manualSecret) {
    return new Response(JSON.stringify({ ok: false, message: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const pageId = process.env.FACEBOOK_PAGE_ID;
  const accessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
  if (!pageId || !accessToken) {
    return new Response(
      JSON.stringify({
        ok: false,
        message: "Missing FACEBOOK_PAGE_ID or FACEBOOK_PAGE_ACCESS_TOKEN env vars",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  let item: RssItem | null;
  try {
    item = await fetchLatestRssItem();
  } catch (err: any) {
    return new Response(
      JSON.stringify({ ok: false, message: `RSS fetch failed: ${err.message}` }),
      { status: 502, headers: { "Content-Type": "application/json" } },
    );
  }

  if (!item) {
    return new Response(JSON.stringify({ ok: false, message: "No items in RSS feed" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
  if (!item.imageUrl) {
    return new Response(
      JSON.stringify({ ok: false, message: "Latest RSS item has no image URL" }),
      { status: 422, headers: { "Content-Type": "application/json" } },
    );
  }

  // State: have we posted this item already?
  const store = getStore({ name: "ka-life-fb-state", consistency: "strong" });
  const STATE_KEY = "last_posted_guid";
  const lastPostedGuid = (await store.get(STATE_KEY)) || "";

  if (!force && lastPostedGuid === item.guid) {
    return new Response(
      JSON.stringify({
        ok: true,
        message: "Already posted (no new item since last run)",
        lastPostedGuid,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  }

  const caption = item.description || `${item.title}\n\n${item.link}`;
  const fbResp = await postPhotoToFacebook(pageId, accessToken, item.imageUrl, caption);

  if (fbResp.error) {
    return new Response(
      JSON.stringify({ ok: false, message: "Facebook API error", error: fbResp.error }),
      { status: 502, headers: { "Content-Type": "application/json" } },
    );
  }

  // Persist state so we don't double-post.
  await store.set(STATE_KEY, item.guid);

  const result: PostResult = {
    ok: true,
    message: "Posted successfully",
    fbPostId: fbResp.post_id || fbResp.id,
    postedItem: { guid: item.guid, title: item.title },
  };

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

// Schedule: Saturdays at 08:30 UTC (10:30 CEST / 09:30 CET)
export const config: Config = {
  schedule: "30 8 * * 6",
};
