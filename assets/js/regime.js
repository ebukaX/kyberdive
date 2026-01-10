// regime.js
// Kyberdive MVP — Market Regime Classification Engine

function classifyMarketRegime(metrics) {
  const { sentiment, volatility, momentum } = metrics;

  // Expansion
  if (sentiment > 0.7 && momentum > 0.7 && volatility < 0.6) {
    return {
      label: "Expansion",
      description: "Strong conviction and trend alignment indicate growth phase."
    };
  }

  // Momentum Rotation
  if (momentum > 0.7 && volatility >= 0.6) {
    return {
      label: "Momentum Rotation",
      description: "Capital rotation underway with elevated sensitivity."
    };
  }

  // Volatile Stress
  if (volatility > 0.7 && sentiment < 0.5) {
    return {
      label: "Volatile Stress",
      description: "Instability dominates as confidence deteriorates."
    };
  }

  // Distribution
  if (momentum < 0.5 && sentiment < 0.5 && volatility >= 0.5) {
    return {
      label: "Distribution",
      description: "Participants reduce exposure amid weakening signals."
    };
  }

  // Consolidation (default)
  return {
    label: "Consolidation",
    description: "Market pauses as positioning recalibrates."
  };
}
