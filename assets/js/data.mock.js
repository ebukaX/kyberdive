// data.mock.js
// Kyberdive MVP — Mock World-to-Market Signal Layer

const KYBERDIVE_SECTORS = [
  {
    id: "energy",
    name: "Energy",
    narrative: "Global supply tensions and infrastructure stress reshape energy markets.",
    metrics: {
      sentiment: 0.72,          // 0 → 1 (fear → optimism)
      volatility: 0.58,         // market instability
      momentum: 0.65            // trend strength
    },
    trend: [45, 48, 52, 50, 55, 60, 63],
    signals: [
      "Oil supply constraints",
      "Geopolitical shipping risks",
      "Renewable transition pressure"
    ]
  },

  {
    id: "technology",
    name: "Technology",
    narrative: "AI adoption and infrastructure scaling drive asymmetric growth.",
    metrics: {
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
    metrics: {
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
    metrics: {
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

// Utility accessors (used across the app)
function getAllSectors() {
  return KYBERDIVE_SECTORS;
}

function getSectorById(id) {
  return KYBERDIVE_SECTORS.find(sector => sector.id === id);
}
