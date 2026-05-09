# KA-Life Netlify Functions

## post-to-facebook

Postet das neueste Item aus `https://ka-life.de/rss.xml` als Foto-Post auf die
KA-Life Facebook-Seite.

### Cron

Samstags 08:30 UTC (10:30 CEST / 09:30 CET). Der Cron `0 8 * * 6` baut zuerst
die neue Infografik (laeuft im Computer-Sandbox), dann pollt diese Function 30
Minuten spaeter den fertig deployten RSS-Feed.

### Required Environment Variables

Im Netlify Dashboard -> Site Settings -> Environment Variables:

| Variable | Beschreibung |
|---|---|
| `FACEBOOK_PAGE_ID` | Numerische ID der KA-Life Facebook-Seite (`61574348422781`) |
| `FACEBOOK_PAGE_ACCESS_TOKEN` | Long-Lived Page Access Token (laeuft in der Praxis nie ab, solange man sich gelegentlich einloggt) |
| `MANUAL_TRIGGER_SECRET` | Frei waehlbares Geheimnis (Random-String) fuer manuellen Trigger via Browser-URL |

Optional:

| Variable | Beschreibung |
|---|---|
| `FACEBOOK_APP_ID` | App-ID der Meta App (fuer eventuelles Token-Refresh) |
| `FACEBOOK_APP_SECRET` | App-Secret (fuer eventuelles Token-Refresh) |
| `FB_FORCE_POST` | `1` setzen, um den State zu ignorieren (Test) |

### Manueller Trigger

```
GET https://ka-life.de/.netlify/functions/post-to-facebook?secret=<MANUAL_TRIGGER_SECRET>
```

Mit `&force=1` wird auch dann gepostet, wenn das Item schon mal gepostet wurde
(nuetzlich fuer Tests):

```
GET https://ka-life.de/.netlify/functions/post-to-facebook?secret=<SECRET>&force=1
```

### State

Die Function speichert die GUID des zuletzt geposteten Items im Netlify-Blob
Store `ka-life-fb-state` unter dem Key `last_posted_guid`. Damit wird
verhindert, dass ein Item doppelt gepostet wird, falls die Function mehrmals
laeuft.

### Token erneuern

Falls das Page Access Token doch mal abgelaufen ist:

1. Graph API Explorer oeffnen, App auswaehlen
2. User Token holen mit Permissions `pages_show_list`, `pages_read_engagement`,
   `pages_manage_posts`
3. Im Access Token Tool **"Extend Access Token"** klicken (Long-Lived User
   Token, 60 Tage)
4. GET `me/accounts` -> Page Access Token aus dem Response (`access_token`)
   kopieren
5. In Netlify Site Settings -> Environment Variables -> `FACEBOOK_PAGE_ACCESS_TOKEN`
   ueberschreiben
6. Site re-deployen (oder einfach naechsten Push abwarten)
