# Kyberdive

Kyberdive is an AI-powered crypto intelligence platform that translates real-world forces into sector-level crypto narratives.

Instead of focusing on individual tokens or short-term price action, Kyberdive helps users understand **which sectors matter, why they matter, and how market narratives evolve over time**.

---

## Core Philosophy

**Sectors are the story. Tokens are evidence.**

Kyberdive is designed to:
- Explain market behavior, not predict prices
- Emphasize macro narratives over micro speculation
- Provide clarity without hype or urgency

Kyberdive is **not** a trading platform.

---

## MVP Scope

### Included
- Sector-based market organization
- Narrative strength scoring
- Visual dashboards and charts
- AI-generated explanatory insights
- Sector comparison tools
- Dark-mode command-center UI

### Explicitly Excluded
- Buy/sell signals
- Price predictions
- Alerts and notifications
- Portfolio tracking
- Social sentiment scraping

---

## Tech Stack (MVP)

- Next.js (React)
- TypeScript
- Tailwind CSS
- Charting library (TBD)
- External crypto market data API
- AI API for insight generation

---

## Project Structure

The repository is structured to reflect Kyberdive’s philosophy:

- `/docs` → product truth and methodology
- `/data` → sector and narrative definitions
- `/services` → data aggregation and scoring logic
- `/components` → reusable UI building blocks
- `/pages` → route-based views

Business logic is never embedded directly in UI components.

---

## Running the Project (Local)

```bash
npm install
npm run dev
