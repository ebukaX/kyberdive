/* =====================================================
   KYBERDIVE — MINI CHARTS SCRIPT (MVP)
   File: charts.js
   Requires: Chart.js (include via CDN or npm)
   ===================================================== */

/* ---------- Helper Function ---------- */
function createMiniChart(canvasId, data, color) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.labels, // e.g., ['1h','2h','3h',...]
      datasets: [{
        label: '',
        data: data.values,
        borderColor: color,
        backgroundColor: 'rgba(0,255,255,0.1)',
        fill: true,
        tension: 0.3, // smooth curves
        pointRadius: 0 // no points for mini chart
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          enabled: true,
          backgroundColor: 'rgba(0,0,0,0.8)',
          titleColor: '#00f0ff',
          bodyColor: '#c0c0c0',
          xPadding: 8,
          yPadding: 6,
          displayColors: false
        }
      },
      scales: {
        x: { display: false },
        y: { display: false }
      },
      elements: {
        line: { borderWidth: 2 }
      }
    }
  });
}

/* ---------- Create Mini Charts for Sectors ---------- */
function initMiniCharts() {
  createMiniChart('energyMiniChart', dataMock.energy, '#00ff88');
  createMiniChart('aiMiniChart', dataMock.ai, '#ff00ff');
  createMiniChart('defenseMiniChart', dataMock.defense, '#ff5500');
  // Add more sectors as needed
}

/* ---------- Initialize Charts on Page Load ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initMiniCharts();
});
