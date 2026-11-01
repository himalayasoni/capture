# Capture

A comfort-first learning jar. Keep any word, topic or thing you hear about; Claude explains it in a line, a minute, or more, and hands back at most three a day. The Shelf shows what you have learned by day, week and month.

- Installs on your phone from Chrome (Add to Home screen) and works offline.
- Share text or links into it from any app (Android share sheet).
- Everything is saved on the device (IndexedDB). Settings → Export makes a backup file.
- Uses your own Claude API key, stored only on the device. Cards use Claude Haiku; questions can use Haiku or Sonnet, with web search when fresh information is needed.
- A monthly spend limit (default $3) pauses requests once reached. "Continue in Claude" copies a card and its conversation into the Claude app.

## Setup
1. In the [Claude Console](https://platform.claude.com/), buy a few dollars of credits and create an API key.
2. Open the app, tap Settings, paste the key, tap **Save & test**.

No build step: the site is plain files served by GitHub Pages.
