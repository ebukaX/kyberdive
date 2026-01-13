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

/* ---------- INIT AFTER DOM LOAD ---------- */

document.addEventListener("DOMContentLoaded", () => {
  // DOM references
  const sectorNodes = document.querySelectorAll(".sector-node");
  const insightPanel = document.getElementById("ai-insight");
  const metricDominance = document.getElementById("metric-dominance");
  const metricVolatility = document.getElementById("metric-volatility");
  const metricMomentum = document.getElementById("metric-momentum");

  // Safety check
  if (!window.SectorMap) {
    console.error("SectorMap not found. Check data.mock.js");
    return;
  }

  AppState.sectors = window.SectorMap;

  /* ---------- CORE FUNCTIONS ---------- */

 function setActiveSector(sectorKey) {
  if (!AppState.sectors[sectorKey]) return;

  AppState.activeSector = sectorKey;
  updateUI();
  updateInsight();

  // 🔗 Notify charts
  updateSectorCharts(sectorKey);
}

  function updateUI() {
    const sector = AppState.sectors[AppState.activeSector];
    if (!sector) return;

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

  function updateInsight() {
    if (!AppState.insightsEnabled || !insightPanel) return;

    const sector = AppState.sectors[AppState.activeSector];
    if (!sector) return;

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

  /* ---------- EVENTS ---------- */

  sectorNodes.forEach(node => {
    node.addEventListener("click", () => {
      setActiveSector(node.dataset.sector);
    });
  });

  /* ---------- START APP ---------- */

  setActiveSector(AppState.activeSector);
});
