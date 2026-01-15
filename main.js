/* =====================================================
   KYBERDIVE – CORE INTERACTION LOGIC (MVP)
   File: main.js
===================================================== */

const AppState = {
  activeSector: "energy",
  sectors: {},
  insightsEnabled: true
};

document.addEventListener("DOMContentLoaded", () => {
  const sectorNodes = document.querySelectorAll(".sector-node");
  const insightPanel = document.getElementById("ai-insight");
  const metricDominance = document.getElementById("metric-dominance");
  const metricVolatility = document.getElementById("metric-volatility");
  const metricMomentum = document.getElementById("metric-momentum");

  if (!window.SectorMap) {
    console.error("SectorMap not found. Check data.mock.js");
    return;
  }

  AppState.sectors = window.SectorMap;

  /* ---------- CORE FUNCTIONS ---------- */

  function setActiveSector(sectorKey) {
    const sector = AppState.sectors[sectorKey];
    if (!sector) return;

    AppState.activeSector = sectorKey;
    updateUI(sector);
    updateInsight(sector);
    updateCharts(sector); // ✅ correct function
  }

  function updateUI(sector) {
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

  function updateInsight(sector) {
    if (!AppState.insightsEnabled || !insightPanel) return;

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

  /* ---------- INIT ---------- */

  const initialSector = AppState.sectors[AppState.activeSector];

  initCharts(initialSector); // ✅ initialize charts ONCE
  setActiveSector(AppState.activeSector);
});
