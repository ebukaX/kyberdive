/* =====================================================
   KYBERDIVE — MOCK WORLD → MARKET SIGNAL LAYER (MVP)
   File: data.mock.js
   ===================================================== */

/*
  This file represents Kyberdive’s narrative intelligence layer.
  It models how real-world forces translate into sector-level
  crypto market behavior.
*/

/* ---------- SECTOR DATA (ARRAY FORM) ---------- */
/* Used for charts, loops, global overviews */

const KYBERDIVE_SECTORS = [
  {
    id: "energy",
    name: "Energy",
    narrative: "Global supply tensions and infrastructure stress reshape energy markets.",
    realWorldSignal: "Oil supply constraints and grid instability",
    cryptoNarrative: "Energy-linked infrastructure and compute demand increasing",
    sentimentLabel: "bullish",
    metrics: {
      dominance: 18.4,
      sentiment: 0.72,     // 0 → 1 (fear → optimism)
      volatility: 0.58,    // instability level
      momentum: 0.65       // trend strength
    },
    trend: [45, 48, 52, 50, 55, 60, 63],
    signals: [
      "Oil supply constraints",
      "Geopolitical shipping risks",
      "Renewable transition pressure"
    ]
  },

  {
    id: "ai",
    name: "AI / Cloud",
    narrative: "AI adoption and infrastructure scaling drive asymmetric growth.",
    realWorldSignal: "AI regulation shifts and compute demand spike",
    cryptoNarrative: "Decentralized compute and data layers gaining relevance",
    sentimentLabel: "bullish",
    metrics: {
      dominance: 22.1,
      sentiment: 0.81,
      volatility: 0.42,
      momentum: 0.78
    },
    trend: [60, 62, 65, 70, 72, 75, 80],
    signals: [
      "AI compute demand",
      "Cloud infrastructure expansion",
      "Semiconductor supply alignment"
    ]
  },

  {
    id: "finance",
    name: "Finance",
    narrative: "Liquidity cycles tighten while digital assets gain narrative relevance.",
    realWorldSignal: "Interest rate uncertainty and banking pressure",
    cryptoNarrative: "Crypto assets repositioned as alternative liquidity rails",
    sentimentLabel: "neutral",
    metrics: {
      dominance: 14.6,
      sentiment: 0.54,
      volatility: 0.67,
      momentum: 0.49
    },
    trend: [55, 53, 50, 52, 48, 46, 45],
    signals: [
      "Interest rate uncertainty",
      "Banking system pressure",
      "Crypto as hedge narrative"
    ]
  },

  {
    id: "consumer",
    name: "Consumer",
    narrative: "Everyday cost pressures reshape spending behavior globally.",
    realWorldSignal: "Inflation persistence and wage pressure",
    cryptoNarrative: "Consumer-facing crypto utilities under stress",
    sentimentLabel: "bearish",
    metrics: {
      dominance: 9.1,
      sentiment: 0.47,
      volatility: 0.51,
      momentum: 0.44
    },
    trend: [50, 49, 47, 46, 45, 44, 43],
    signals: [
      "Inflation persistence",
      "Wage growth mismatch",
      "Shifts to essential goods"
    ]
  }
];

/* ---------- NORMALIZED ACCESS MAP ---------- */
/* Used by controllers and interaction logic */

const SectorMap = {};
KYBERDIVE_SECTORS.forEach(sector => {
  SectorMap[sector.id] = sector;
});

/* ---------- GLOBAL EXPOSURE (MVP MODE) ---------- */
/* No bundler yet — explicit globals */

window.KYBERDIVE_SECTORS = KYBERDIVE_SECTORS;
window.SectorMap = SectorMap;
