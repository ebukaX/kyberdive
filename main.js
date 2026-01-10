/* =====================================================
   KYBERDIVE – CORE INTERACTION LOGIC (MVP)
   File: main.js
   ===================================================== */

/* ---------- GLOBAL APP STATE ---------- */

const AppState = {
  activeSector: "energy",
  sectors: [],
  insightsEnabled: true
};

/* ---------- DOM REFERENCES ---------- */

const sectorNodes = document.querySelectorAll(".sector-node");
const insightPanel = document.getElementById("ai-insight");
const metricSentiment = document.getElementById("metric-dominance");
const metricVolatility = document.getElementById("metric-volatility");
const metricMomentum = document.getElementById("metric-momentum");

/* ---------- CORE FUNCTIONS ---------- */

/* Switch active sector */
function setActiveSector(sectorId) {
  const sector = AppState.sectors.find(s => s.id === sectorId);
  if (!sector) return;

  AppState.activeSector = sectorId;
  updateUI(sector);
  updateInsight(sector);
}

/* Update HUD metrics */
function updateUI(sector) {
  metricSentiment.textContent = Math.round(sector.metrics.sentiment * 100) + "%";
  metricVolatility.textContent = sector.metrics.volatility.toFixed(2);
  metricMomentum.textContent = sector.metrics.momentum.toFixed(2);

  sectorNodes.forEach(node => {
    node.classList.toggle(
      "active",
      node.dataset.sector === sector.id
    );
  });
}

/* Update AI Insight Panel */
function updateInsight(sector) {
  if (!AppState.insightsEnabled) return;

  const insightText = generateSectorInsight(sector);

  insightPanel.innerHTML = `
    <h3>${sector.name} Sector Insight</h3>
    <p class="insight-text">${insightText}</p>
    <p class="context">
      <strong>Market narrative:</strong> ${sector.narrative}
    </p>
    <p class="context">
      <strong>Active signals:</strong> ${sector.signals.join(", ")}
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
  AppState.sectors = getAllSectors();
  setActiveSector(AppState.activeSector);
});
