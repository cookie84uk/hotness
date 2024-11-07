// Feature ideas and implementation status
const FEATURES = {
  scoring: {
    degenMode: {
      description: "High risk scoring focused on volume spikes and new tokens",
      status: "in_progress"
    },
    normieMode: {
      description: "Conservative scoring focused on stability and established tokens",
      status: "in_progress"
    },
    timeDecay: {
      description: "Score reduction over time to keep rankings fresh",
      status: "planned"
    }
  },
  
  hotTokens: {
    tokenOfTheMinute: {
      description: "Highlights the most active token in last minute",
      status: "planned",
      implementation: {
        factors: [
          "Trade volume",
          "Number of trades",
          "Price movement",
          "Buy/sell ratio"
        ]
      }
    },
    luckyDip: {
      description: "Random token selector with customizable filters",
      status: "planned",
      filters: [
        "Market cap range",
        "Volume threshold",
        "Age of token",
        "Number of holders"
      ]
    }
  },

  analytics: {
    priceAlerts: {
      description: "Notifications for significant price movements",
      status: "planned"
    },
    trendDetection: {
      description: "Early pattern recognition for potential moves",
      status: "planned"
    },
    whaleTracking: {
      description: "Enhanced whale activity monitoring",
      status: "planned"
    }
  }
};

// Development log
export const devLog = [
  {
    date: "2024-03-19",
    feature: "Scoring Modes",
    notes: "Implemented basic degen/normie scoring modes",
    nextSteps: [
      "Add time decay",
      "Fine-tune scoring weights",
      "Add more market indicators"
    ]
  },
  {
    date: "2024-03-19",
    feature: "Token of the Minute",
    concept: `
      - Track 1-minute windows of activity
      - Score based on:
        * Trade volume
        * Number of transactions
        * Price impact
        * Buy pressure
      - Visual indicator for "hot minute"
      - Auto-refresh every 60s
    `
  },
  {
    date: "2024-03-19",
    feature: "Lucky Dip",
    concept: `
      - Random token selector with filters
      - "I'm feeling lucky" button
      - Customizable risk levels
      - Historical performance
    `
  }
]; 