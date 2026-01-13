/* =====================================================
   KYBERDIVE – CHART ENGINE (MVP)
   File: charts.js
===================================================== */

let dominanceChart = null;
let momentumChart = null;

/* ---------- CREATE CHARTS ---------- */

function initCharts(sector) {
  const dominanceCtx = document
    .getElementById("dominanceChart")
    ?.getContext("2d");

  const momentumCtx = document
    .getElementById("momentumChart")
    ?.getContext("2d");

  if (!dominanceCtx || !momentumCtx) {
    console.warn("Chart canvas not found");
    return;
  }

  dominanceChart = new Chart(dominanceCtx, {
    type: "doughnut",
    data: {
      labels: ["Sector", "Market"],
      datasets: [{
        data: [
          sector.metrics.dominance,
          100 - sector.metrics.dominance
        ],
        backgroundColor: ["#00f0ff", "#1b1b1b"],
        borderWidth: 0
      }]
    },
    options: {
      cutout: "70%",
      plugins: {
        legend: { display: false }
      }
    }
  });

  momentumChart = new Chart(momentumCtx, {
    type: "line",
    data: {
      labels: sector.trend.labels,
      datasets: [{
        label: "Momentum",
        data: sector.trend.values,
        borderWidth: 2,
        tension: 0.4,
        fill: false
      }]
    },
    options: {
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { display: false },
        y: { display: false }
      }
    }
  });
}

/* ---------- UPDATE CHARTS ---------- */

function updateSectorCharts(sectorKey) {
  const sector = window.SectorMap?.[sectorKey];
  if (!sector) return;

  // First load
  if (!dominanceChart || !momentumChart) {
    initCharts(sector);
    return;
  }

  // Update dominance
  dominanceChart.data.datasets[0].data = [
    sector.metrics.dominance,
    100 - sector.metrics.dominance
  ];
  dominanceChart.update();

  // Update momentum
  momentumChart.data.labels = sector.trend.labels;
  momentumChart.data.datasets[0].data = sector.trend.values;
  momentumChart.update();
}
