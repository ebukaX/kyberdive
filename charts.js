/* =====================================================
   KYBERDIVE — CHART ENGINE (MVP)
   File: charts.js
   ===================================================== */

let dominanceChart;
let momentumChart;

/* ---------- CHART CONFIG HELPERS ---------- */

function baseChartConfig(label, data) {
  return {
    type: "line",
    data: {
      labels: ["T-6", "T-5", "T-4", "T-3", "T-2", "T-1", "Now"],
      datasets: [
        {
          label,
          data,
          tension: 0.4,
          borderWidth: 2,
          pointRadius: 0
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { display: false },
        y: { display: false }
      }
    }
  };
}

/* ---------- INIT ---------- */

function initCharts(sector) {
  const domCtx = document
    .getElementById("dominanceChart")
    .getContext("2d");

  const momCtx = document
    .getElementById("momentumChart")
    .getContext("2d");

  dominanceChart = new Chart(
    domCtx,
    baseChartConfig("Dominance", sector.trend)
  );

  momentumChart = new Chart(
    momCtx,
    baseChartConfig("Momentum", sector.trend)
  );
}

/* ---------- UPDATE ---------- */

function updateCharts(sector) {
  dominanceChart.data.datasets[0].data = sector.trend;
  momentumChart.data.datasets[0].data = sector.trend;

  dominanceChart.update();
  momentumChart.update();
}
