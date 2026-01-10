/* ===============================
   KYBERDIVE — MARKET CORE LOGIC
   =============================== */

const AppState = {
  activeSector: "energy",
  sectors: {},
};

/* DOM */
const sectorNodes = document.querySelectorAll(".sector-node");
const insightPanel = document.getElementById("ai-insight");
const metricDominance = document.getElementById("metric-dominance");
const metricVolatility = document.getElementById("metric-volatility");
const metricMomentum = document.getElementById("metric-momentum");

/* INIT */
document.addEventListener("DOMContentLoaded", () => {
  AppState.sectors = getAllSectors().reduce((map, s) => {
    map[s.id] = s;
    return map;
  }, {});

  setActiveSector(AppState.activeSector);
});

/* CORE */
function setActiveSector(sectorId) {
  const sector = AppState.sectors[sectorId];
  if (!sector) return;

  AppState.activeSector = sectorId;
  updateUI(sector);
  updateInsight(sector);
}

function updateUI(sector) {
  metricDominance.textContent = sector.metrics.sentiment;
  metricVolatility.textContent = sector.metrics.volatility;
  metricMomentum.textContent = sector.metrics.momentum;

  sectorNodes.forEach(btn =>
    btn.classList.toggle("active", btn.dataset.sector === sector.id)
  );
}

function updateInsight(sector) {
  const insight = generateSectorInsight(sector);
  const regime = classifyMarketRegime(sector.metrics);

  insightPanel.innerHTML = `
    <h3>${sector.name} Sector</h3>

    <p><strong>Market Regime:</strong> ${regime.label}</p>
    <p class="regime-desc">${regime.description}</p>

    <p class="insight-text">${insight}</p>

    <p><strong>Signals:</strong> ${sector.signals.join(", ")}</p>
  `;
}

/* EVENTS */
sectorNodes.forEach(node => {
  node.addEventListener("click", () => {
    setActiveSector(node.dataset.sector);
  });
});
