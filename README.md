# 🌕 Lunaria

**The daily ascent.** A trivia game where knowing the *obvious* answer is worth the least — the rarer your keyword, the higher you climb toward the Moon.

Inspired by the rarity-scoring concept popularized by Krillion, flipped from a deep-sea dive into a Moon ascent.

## How to play

1. Each mission has **10 rounds**, one open question per round (same pool for everyone).
2. You answer with a **keyword of 1–2 words**.
3. Each accepted keyword has a bundled **estimated monthly Google search volume**. Your answer is scored against the **average volume of all accepted answers** for that question:
   - far below average → rarer → higher tier
4. Points launch your rocket from low orbit (40,000 km) toward the Moon (384,400 km).

## Tiers

| Tier | Points | Meaning |
|----------|--------|----------------------|
| 💎 Diamond | 50 | almost impossible |
| ⬜ Platinum | 40 | very rare |
| 🥇 Gold | 30 | rare |
| 🥈 Silver | 20 | common |
| 🥊 Bronze | 10 | very common |

Refused/off-list answers score nothing but cost nothing either.

## Architecture

- `js/data.js` — bundled question bank. Every question carries 6–30 accepted keywords, each with an estimated monthly search volume snapshot. Volumes are curated estimates, **not live Google data** (see roadmap).
- `js/game.js` — tier logic: `ratio = keyword volume / question average volume`, mapped to Diamond (<1% of avg), Platinum (<3%), Gold (<8%), Silver (<20%), Bronze (rest).
- `js/ui.js` + `css/style.css` — the three screens (launch, ascent, results), HUD and altitude track.
- Static site, zero dependencies, zero backend — deployable on GitHub Pages as-is.

## Roadmap: live scoring

The bundled volumes are snapshots. To score against **real, current monthly search volume**, plug in a keyword-data API (e.g. DataForSEO Keywords Data API or Google Ads API) behind a small serverless function (Cloudflare Workers / Vercel Edge) that holds the API key. `scoreKeyword()` in `js/game.js` is the single integration point: replace the static volume lookup with an async fetch.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# → http://localhost:8000
```

## Play online

Enabled via GitHub Pages: **https://epidemikgg.github.io/Lunaria/**
