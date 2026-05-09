// Generates RSS 2.0 feed (rss.xml) and sitemap.xml for KA-Life infographics.
// Reads infographics from client/src/lib/infographic-data.ts and writes feed
// to client/public/rss.xml so Vite serves it at /rss.xml after build.

import { writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

import { infographics } from "../client/src/lib/infographic-data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, "..");

const SITE_URL = "https://ka-life.de";
const FEED_TITLE = "KA-Life — Karlsruhe in Zahlen";
const FEED_DESCRIPTION =
  "Wöchentliche Infografik-Kolumne zu Karlsruhe. Daten, Fakten und satirische Fächertorten aus der Fächerstadt.";
const FEED_LANGUAGE = "de-DE";
const COPYRIGHT = "© Decisions Made Easy GmbH, Karlsruhe";

function escapeXml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Map a German date range like "11.–17. Mai 2026" to a Saturday-of-publication
// pubDate (best-effort). We use the END of the dateRange when possible.
const monthMap: Record<string, number> = {
  "januar": 0, "jan": 0,
  "februar": 1, "feb": 1,
  "märz": 2, "marz": 2, "mar": 2, "mrz": 2,
  "april": 3, "apr": 3,
  "mai": 4,
  "juni": 5, "jun": 5,
  "juli": 6, "jul": 6,
  "august": 7, "aug": 7,
  "september": 8, "sep": 8,
  "oktober": 9, "okt": 9,
  "november": 10, "nov": 10,
  "dezember": 11, "dez": 11,
};

function parsePubDate(dateRange: string, year: number): Date {
  // Try to extract last day in the range, e.g. "11.–17. Mai 2026" -> 17 May 2026.
  // Strategy: find the last token "DD." followed later by a month name.
  const lower = dateRange.toLowerCase();
  // Find month name first
  let monthIdx = -1;
  let monthName = "";
  for (const [name, idx] of Object.entries(monthMap)) {
    const re = new RegExp(`\\b${name}\\b`);
    const m = lower.match(re);
    if (m && m.index !== undefined) {
      // Prefer the LAST occurrence of a month (covers cross-month ranges).
      if (m.index > monthIdx) {
        monthIdx = m.index;
        monthName = name;
      }
    }
  }
  if (monthIdx === -1) {
    return new Date(Date.UTC(year, 0, 1, 8, 0, 0));
  }
  const month = monthMap[monthName];

  // Look for the LAST day number before that month name token in the string.
  const before = lower.slice(0, monthIdx);
  const dayMatches = [...before.matchAll(/(\d{1,2})\s*\.?/g)];
  let day = 1;
  if (dayMatches.length > 0) {
    const lastMatch = dayMatches[dayMatches.length - 1];
    day = parseInt(lastMatch[1], 10) || 1;
  }
  // Use 08:00 UTC (approx 10:00 CEST publishing time)
  return new Date(Date.UTC(year, month, day, 8, 0, 0));
}

function buildRss(): string {
  const items = infographics
    .map((ig) => {
      const url = `${SITE_URL}/#/kw/${ig.id}`;
      const imageUrl = `${SITE_URL}/social/${ig.id}.png`;
      const pubDate = parsePubDate(ig.dateRange, ig.year);
      const altText = `KA-Life ${ig.id.toUpperCase()}: ${ig.title}`;
      // Plain-text description for tools that strip HTML.
      const plainText = `${ig.subtitle}\n\n${ig.socialPostText}`;
      // HTML description with image embedded as <img> for tools that use HTML.
      const htmlContent = `<p><img src="${imageUrl}" alt="${escapeXml(altText)}" /></p>` +
        `<p>${escapeXml(ig.subtitle)}</p>` +
        `<p>${escapeXml(ig.socialPostText).replace(/\n/g, "<br/>")}</p>`;
      return `    <item>
      <title>${escapeXml(ig.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${pubDate.toUTCString()}</pubDate>
      <category>${escapeXml(ig.kicker)}</category>
      <description><![CDATA[${plainText}]]></description>
      <content:encoded><![CDATA[${htmlContent}]]></content:encoded>
      <enclosure url="${escapeXml(imageUrl)}" length="0" type="image/png" />
      <media:content url="${escapeXml(imageUrl)}" medium="image" type="image/png" />
      <media:thumbnail url="${escapeXml(imageUrl)}" />
    </item>`;
    })
    .join("\n");

  const lastBuild = new Date().toUTCString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:media="http://search.yahoo.com/mrss/"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>${FEED_LANGUAGE}</language>
    <copyright>${escapeXml(COPYRIGHT)}</copyright>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE_URL}/social/${infographics[0]?.id ?? ""}.png</url>
      <title>${escapeXml(FEED_TITLE)}</title>
      <link>${SITE_URL}</link>
    </image>
${items}
  </channel>
</rss>
`;
}

function buildSitemap(): string {
  const staticPages = ["/", "/#/ueber", "/#/impressum"];
  const igUrls = infographics.map((ig) => `/#/kw/${ig.id}`);
  const allUrls = [...staticPages, ...igUrls];
  const today = new Date().toISOString().slice(0, 10);
  const urls = allUrls
    .map((p) => {
      return `  <url>
    <loc>${SITE_URL}${p}</loc>
    <lastmod>${today}</lastmod>
  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap-0.9">
${urls}
</urlset>
`;
}

const outputDir = resolve(projectRoot, "client", "public");
mkdirSync(outputDir, { recursive: true });

const rss = buildRss();
writeFileSync(resolve(outputDir, "rss.xml"), rss, "utf-8");
console.log(`Wrote rss.xml (${rss.length} bytes, ${infographics.length} items)`);

const sitemap = buildSitemap();
writeFileSync(resolve(outputDir, "sitemap.xml"), sitemap, "utf-8");
console.log(`Wrote sitemap.xml (${sitemap.length} bytes)`);
