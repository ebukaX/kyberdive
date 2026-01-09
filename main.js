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
  const insightText = generateSectorInsight(sector);

  insightPanel.innerHTML = `
    <h3>${sector.name} Sector Insight</h3>
    <p class="insight-text">${insightText}</p>
    <p class="context">
      <strong>Real-world:</strong> ${sector.realWorldSignal}
    </p>
    <p class="context">
      <strong>Crypto translation:</strong> ${sector.cryptoNarrative}
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
  AppState.sectors = window.SectorMap;
  setActiveSector(AppState.activeSector);
});
