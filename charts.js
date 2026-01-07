/* =====================================================
   KYBERDIVE – CHART & VISUALIZATION ENGINE (MVP)
   File: charts.js
   ===================================================== */

/*
  DESIGN PRINCIPLES:
  - Visuals support narrative, not speculation
  - No decorative charts
  - Every graph answers one question
*/

/* ---------- CHART REGISTRY ---------- */

const Charts = {
  dominance: null,
  momentum: null,
  volatility: null
};

/* ---------- GENERIC HUD STYLE ---------- */

const hudStyle = {
  borderColor: "rgba(0, 255, 255, 0.6)",
  backgroundColor: "rgba(0, 255, 255, 0.08)",
  textColor: "#9ffcff",
  gridColor: "rgba(255,255,255,0.05)"
};

/* ---------- INITIALIZE ALL CHARTS ---------- */

function initCharts() {
  createDominanceChart();
  createMomentumChart();
  createVolatilityChart();
}

/* ---------- DOM HELPERS ---------- */

function ctx(id) {
  return document.getElementById(id).getContext("2d");
}

/* ---------- DOMINANCE CHART ---------- */
/* Question answered:
   "How much attention this sector commands in the market"
*/

function createDominanceChart() {
  Charts.dominance = new Chart(ctx("dominanceChart"), {
    type: "radar",
    data: {
      labels: ["Energy", "AI", "Defense", "Health", "Cyber"],
      datasets: [{
        label: "Sector Dominance",
        data: [18.4, 22.1, 9.7, 14.2, 11.9],
        borderColor: hudStyle.borderColor,
        backgroundColor: hudStyle.backgroundColor,
        pointBackgroundColor: hudStyle.textColor
      }]
    },
    options: hudOptions()
  });
}

/* ---------- MOMENTUM CHART ---------- */
/* Question answered:
   "Is attention accelerating or decaying?"
*/

function createMomentumChart() {
  Charts.momentum = new Chart(ctx("momentumChart"), {
    type: "line",
    data: {
      labels: ["T-5", "T-4", "T-3", "T-2", "Now"],
      datasets: [{
        label: "Momentum",
        data: [0.42, 0.51, 0.63, 0.71, 0.83],
        borderColor: hudStyle.borderColor,
        tension: 0.35,
        fill: true,
        backgroundColor: hudStyle.backgroundColor
      }]
    },
    options: hudOptions()
  });
}

/* ---------- VOLATILITY CHART ---------- */
/* Question answered:
   "How unstable is the narrative?"
*/

function createVolatilityChart() {
  Charts.volatility = new Chart(ctx("volatilityChart"), {
    type: "bar",
    data: {
      labels: ["Energy", "AI", "Defense"],
      datasets: [{
        label: "Volatility Index",
        data: [0.62, 0.78, 0.54],
        backgroundColor: hudStyle.backgroundColor,
        borderColor: hudStyle.borderColor,
        borderWidth: 1
      }]
    },
    options: hudOptions()
  });
}

/* ---------- HUD OPTIONS ---------- */

function hudOptions() {
  return {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: hudStyle.textColor
        }
      }
    },
    scales: {
      r: {
        grid: { color: hudStyle.gridColor },
        angleLines: { color: hudStyle.gridColor },
        pointLabels: { color: hudStyle.textColor },
        ticks: { display: false }
      },
      x: {
        grid: { color: hudStyle.gridColor },
        ticks: { color: hudStyle.textColor }
      },
      y: {
        grid: { color: hudStyle.gridColor },
        ticks: { color: hudStyle.textColor }
      }
    }
  };
}

/* ---------- UPDATE HOOK (CALLED FROM main.js LATER) ---------- */

function updateChartsForSector(sectorKey, metrics) {
  // MVP placeholder: real-time updates come later
  console.info("Updating charts for:", sectorKey, metrics);
}

/* ---------- INIT ---------- */

document.addEventListener("DOMContentLoaded", initCharts);
