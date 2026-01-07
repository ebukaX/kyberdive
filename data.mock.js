/* =====================================================
   KYBERDIVE – MOCK DATA SOURCE (MVP)
   File: data.mock.js
   ===================================================== */

/*
  DATA PHILOSOPHY:
  - Represents patterns, not predictions
  - Values are directional, not precise
  - Structured for future API replacement
*/

const MockData = {
  sectors: {
    energy: {
      id: "energy",
      label: "Energy",
      realWorldSignals: [
        "Oil price volatility",
        "Grid instability events",
        "Energy infrastructure funding"
      ],
      cryptoTranslation: [
        "Decentralized energy trading",
        "Compute cost pressure",
        "Infrastructure token relevance"
      ],
      metrics: {
        dominance: 18.4,
        momentum: [0.42, 0.51, 0.63, 0.71, 0.83],
        volatility: 0.62
      }
    },

    ai: {
      id: "ai",
      label: "AI / Cloud",
      realWorldSignals: [
        "Compute demand surge",
        "AI regulation activity",
        "Cloud pricing pressure"
      ],
      cryptoTranslation: [
        "Decentralized compute networks",
        "Data marketplace relevance",
        "Inference cost arbitrage"
      ],
      metrics: {
        dominance: 22.1,
        momentum: [0.48, 0.57, 0.69, 0.76, 0.83],
        volatility: 0.78
      }
    },

    defense: {
      id: "defense",
      label: "Defense",
      realWorldSignals: [
        "Geopolitical instability",
        "Surveillance expansion",
        "Cyber conflict escalation"
      ],
      cryptoTranslation: [
        "Secure communication protocols",
        "Privacy infrastructure demand",
        "Resilient networks"
      ],
      metrics: {
        dominance: 9.7,
        momentum: [0.31, 0.35, 0.41, 0.44, 0.46],
        volatility: 0.54
      }
    }
  },

  timelines: {
    shortTerm: ["T-5", "T-4", "T-3", "T-2", "Now"],
    midTerm: ["Q-4", "Q-3", "Q-2", "Q-1", "Current"],
    longTerm: ["2019", "2020", "2021", "2022", "2023"]
  },

  sentiments: {
    bullish: {
      label: "Bullish",
      color: "#00ffc6"
    },
    neutral: {
      label: "Neutral",
      color: "#ffc400"
    },
    bearish: {
      label: "Bearish",
      color: "#ff4d4d"
    }
  }
};

/* ---------- DATA ACCESS HELPERS ---------- */

function getSectorData(sectorId) {
  return MockData.sectors[sectorId];
}

function getAllSectors() {
  return Object.values(MockData.sectors);
}
