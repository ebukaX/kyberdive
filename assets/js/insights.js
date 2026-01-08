// insights.js
// Kyberdive MVP — Insight Generation Engine

function generateSectorInsight(sector) {
  const { sentiment, volatility, momentum } = sector.metrics;

  let insight = "";

  // Momentum-driven narratives
  if (momentum > 0.7 && sentiment > 0.7) {
    insight = "Narrative momentum is accelerating as real-world signals align with capital flow.";
  } 
  else if (momentum > 0.7 && sentiment < 0.5) {
    insight = "Price movement is advancing despite mixed conviction, suggesting speculative pressure.";
  }

  // Volatility-driven narratives
  else if (volatility > 0.65 && sentiment < 0.5) {
    insight = "Market behavior reflects instability driven by unresolved external pressures.";
  } 
  else if (volatility > 0.65 && sentiment >= 0.5) {
    insight = "Heightened volatility indicates sensitivity to emerging developments.";
  }

  // Consolidation narratives
  else if (momentum < 0.5 && volatility < 0.5) {
    insight = "Sector activity suggests consolidation as participants reassess positioning.";
  }

  // Neutral fallback
  else {
    insight = "Sector signals remain balanced, with no dominant directional narrative.";
  }

  return insight;
}

// Batch insights for dashboards
function generateAllInsights(sectors) {
  return sectors.map(sector => ({
    sectorId: sector.id,
    sectorName: sector.name,
    insight: generateSectorInsight(sector)
  }));
}
