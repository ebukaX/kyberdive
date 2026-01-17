/* =====================================================
   KYBERDIVE – CHART ENGINE (MVP)
   File: charts.js
===================================================== */

let dominanceChart;
let momentumChart;

/* ---------- INIT CHARTS ---------- */

function initCharts(initialSector) {
  const dominanceCtx = document
    .getElementById("dominanceChart")
    .getContext("2d");

  const momentumCtx = document
    .getElementById("momentumChart")
    .getContext("2d");

  dominanceChart = new Chart(dominanceCtx, {
    type: "doughnut",
    data: {
      labels: ["Sector Share", "Rest of Market"],
      datasets: [
        {
          data: [
            initialSector.metrics.dominance,
            100 - initialSector.metrics.dominance
          ],
          backgroundColor: ["#4fd1c5", "#1f2933"],
          borderWidth: 0
        }
      ]
    },
    options: {
      responsive: true,
      cutout: "70%",
      plugins: {
        legend: { display: false }
      }
    }
  });

  momentumChart = new Chart(momentumCtx, {
    type: "line",
    data: {
      labels: ["T-4", "T-3", "T-2", "T-1", "Now"],
      datasets: [
        {
          data: initialSector.momentumTrend,
          borderColor: "#4fd1c5",
          tension: 0.4,
          fill: false
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
  });
}

/* ---------- UPDATE CHARTS ---------- */

function updateCharts(sector) {
  if (!dominanceChart || !momentumChart) return;

  dominanceChart.data.datasets[0].data = [
    sector.metrics.dominance,
    100 - sector.metrics.dominance
  ];
  dominanceChart.update();

  momentumChart.data.datasets[0].data = sector.momentumTrend;
  momentumChart.update();
}
