/* =====================================================
   KYBERDIVE – CORE INTERACTION LOGIC (MVP)
   File: main.js
   ===================================================== */

/* ---------- GLOBAL APP STATE ---------- */

const AppState = {
  activeSector: "energy",
  sectors: {},
  insightsEnabled: true
};

/* ---------- SECTOR DEFINITIONS (MVP DATA MODEL) ---------- */
/* This is the “real-world → crypto translation layer” seed */

AppState.sectors = {
  energy: {
    name: "Energy",
    realWorldSignal: "Oil prices rising, grid instability",
    cryptoNarrative: "Energy-linked infrastructure and compute demand increasing",
    sentiment: "bullish",
    metrics: {
      dominance: 18.4,
      volatility: 0.62,
      momentum: 0.71
    }
  },
  ai: {
    name: "AI / Cloud",
    realWorldSignal: "AI regulation + compute demand spike",
    cryptoNarrative: "Decentralized compute and data layers gaining relevance",
    sentiment: "bullish",
    metrics: {
      dominance: 22.1,
      volatility: 0.78,
      momentum: 0.83
    }
  },
  defense: {
    name: "Defense",
    realWorldSignal: "Geopolitical tension escalation",
    cryptoNarrative: "Secure communication and privacy tech under focus",
    sentiment: "neutral",
    metrics: {
      dominance: 9.7,
      volatility: 0.54,
      momentum: 0.46
    }
  }
};

/* ---------- DOM REFERENCES ---------- */

const sectorNodes = document.querySelectorAll(".sector-node");
const insightPanel = document.getElementById("ai-insight");
const metricDominance = document.getElementById("metric-dominance");
const metricVolatility = document.getElementById("metric-volatility");
const metricMomentum = document.getElementById("metric-momentum");

/* ---------- CORE FUNCTIONS ---------- */

/* Switch active sector */
function setActiveSector(sectorKey) {
  if (!AppState.sectors[sectorKey]) return;

  AppState.activeSector = sectorKey;
  updateUI();
  updateInsight();
}

/* Update HUD metrics */
function updateUI() {
  const sector = AppState.sectors[AppState.activeSector];

  metricDominance.textContent = sector.metrics.dominance + "%";
  metricVolatility.textContent = sector.metrics.volatility;
  metricMomentum.textContent = sector.metrics.momentum;

  sectorNodes.forEach(node => {
    node.classList.toggle(
      "active",
      node.dataset.sector === AppState.activeSector
    );
  });
}

/* Update AI Insight Panel */
function updateInsight() {
  if (!AppState.insightsEnabled) return;

  const sector = AppState.sectors[AppState.activeSector];

  insightPanel.innerHTML = `
    <h3>${sector.name} Sector Insight</h3>
    <p><strong>Real-world signal:</strong> ${sector.realWorldSignal}</p>
    <p><strong>Crypto translation:</strong> ${sector.cryptoNarrative}</p>
    <p class="sentiment ${sector.sentiment}">
      Market bias: ${sector.sentiment.toUpperCase()}
    </p>
  `;
}

/* ---------- EVENT BINDINGS ---------- */

sectorNodes.forEach(node => {
  node.addEventListener("click", () => {
    setActiveSector(node.dataset.sector);
  });
});

/* ---------- INIT ---------- */

document.addEventListener("DOMContentLoaded", () => {
  setActiveSector(AppState.activeSector);
});
