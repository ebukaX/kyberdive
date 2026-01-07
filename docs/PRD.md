# Kyberdive – Product Requirements Document (PRD)

## Version
MVP v1.0

## Status
Active – In Development

---

## 1. Product Summary

Kyberdive is an AI-powered crypto intelligence platform that organizes cryptocurrencies into real-world thematic sectors and explains how macro forces shape market behavior.

Kyberdive prioritizes **understanding over execution**, providing users with sector-level narrative clarity rather than token-level trading signals.

---

## 2. Problem Statement

Existing crypto platforms:
- Focus heavily on individual token prices
- Encourage short-term speculation
- Overload users with charts without context
- Fail to connect real-world events to market behavior

As a result, users struggle to:
- Understand macro crypto narratives
- Identify sector rotations
- Make confident, informed decisions
- Filter signal from noise

---

## 3. Target Users

### Primary
- Long-term crypto investors
- Analysts and researchers
- Strategy-focused market participants

### Secondary
- Journalists and writers
- Educators
- Macro-curious users entering crypto

Kyberdive is **not** designed for day traders or high-frequency trading.

---

## 4. Core Product Principle

> **Sectors are the story. Tokens are evidence.**

All features must reinforce this principle.

---

## 5. MVP Scope

### Included
- Sector-based market organization
- Narrative strength scoring at sector level
- Aggregated charts and visualizations
- AI-generated explanatory insights
- Sector comparison tools
- Dark-mode, command-center UI

### Excluded
- Buy/sell signals
- Price predictions
- Alerts and notifications
- Portfolio tracking
- Social sentiment scraping
- Deep on-chain analytics

---

## 6. Information Architecture

### Global Navigation
- Home
- Sectors
- Market Core
- Compare
- Insights
- About
- Launch App / Sign In

---

## 7. Page Requirements

### 7.1 Home (`/`)
**Purpose:** Explain the idea and establish trust

Sections:
1. Narrative Hero (“Sectors are the story”)
2. Real-world → Crypto translation explanation
3. Why Kyberdive exists
4. CTA → Enter Market Core

---

### 7.2 Market Core (`/market`)
**Purpose:** Global situational awareness

Sections:
1. Market Situation Brief (AI-generated)
2. Sector Performance Overview
3. Cross-Sector Relationship Mapping

---

### 7.3 Sectors Overview (`/sectors`)
**Purpose:** Explore narratives

Displays all sectors as nodes/cards.
Clicking a sector navigates to its intelligence page.

---

### 7.4 Sector Intelligence Page (`/sectors/[sector]`)
**Purpose:** Deep understanding of a single sector

Sections:
1. Sector Overview & Real-world Drivers
2. Sector Narrative Strength Visuals
3. Token Exposure (aggregated only)
4. AI Insight Panel

---

### 7.5 Compare (`/compare`)
**Purpose:** Pattern recognition

MVP:
- Sector vs sector comparison
- Aligned timelines
- Narrative strength contrasts

---

### 7.6 Insights (`/insights`)
**Purpose:** Authority and retention

Sections:
- Market Briefs
- Narrative Reports
- Methodology Notes

---

### 7.7 About (`/about`)
**Purpose:** Trust and transparency

Sections:
1. What Kyberdive Is
2. How It Works
3. Why It Was Built

---

## 8. Narrative Strength Model (Conceptual)

Narrative strength is determined by:
- Presence of relevant real-world signals
- Sector-wide market confirmation
- Persistence over time
- Breadth across assets

Each sector is assigned a state:
- Emerging
- Accelerating
- Stabilizing
- Peaking
- Fading

Narrative strength is **descriptive, not predictive**.

---

## 9. AI Insight Guidelines

AI insights must:
- Explain trends clearly
- Avoid predictions or urgency
- Use neutral, analytical language
- Reference real-world context

Disallowed outputs:
- Buy/sell advice
- Guaranteed outcomes
- Speculative hype language

---

## 10. UX & Visual Principles

- Dark mode by default
- Neon accents used sparingly
- Calm animations only
- One major visualization per viewport
- Text precedes charts

The interface should feel controlled, intelligent, and composed.

---

## 11. MVP Success Metrics

- Time spent in Market Core
- Engagement with sector pages
- Return visits
- Insight readability (scroll depth)
- Qualitative feedback on clarity

---

## 12. Post-MVP Considerations

- Alerts and signals
- Personalization
- On-chain analytics
- Portfolio overlays
- Expanded data sources
