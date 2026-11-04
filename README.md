# Capture

A comfort-first learning jar, sibling to Ledger. Keep any word, topic or thing you hear about with the + button; the AI explains it, and up to three a day come back as big colourful story cards. Swipe right if you got it, left for another day, tap for the full story and to ask questions. Everything you learn collects on the Shelf as stickers.

- Installs on your phone from Chrome (Add to Home screen) and works offline.
- Share text or links into it from any app (Android share sheet).
- Everything is saved on the device (IndexedDB). Settings → Export makes a backup file.
- Works with Google Gemini's free tier (default) or your own Claude API key; switch in Settings. Keys are stored only on the device.
- Gemini: newest free Flash model for cards and questions, moving to Flash-Lite when Flash's daily limit runs out.
- Claude: cards use Haiku; questions can use Haiku or Sonnet with web search. A monthly spend limit (default $3) pauses requests once reached.
- "Continue in Claude" copies a card and its conversation into the Claude app.

## Setup
1. Get a free key at [Google AI Studio](https://aistudio.google.com/apikey) (no billing needed).
2. Open the app, tap Settings, paste the key, tap **Save & test**.

No build step: the site is plain files served by GitHub Pages.
