interface SimulationConfig {
  initialBalance: number;
  numSimulations: number;
  numTrades: number;
  winRate: number;
  averageWin: number;
  averageLoss: number;
  maxDrawdown: number;
  positionSizing: number;
}

interface SimulationResult {
  finalBalances: number[];
  maxDrawdowns: number[];
  profitFactors: number[];
  winRates: number[];
  metrics: {
    expectedValue: number;
    standardDeviation: number;
    confidence95: [number, number];
    maxDrawdown: number;
    successRate: number;
  };
}

export class MonteCarloSimulation {
  async runSimulation(config: SimulationConfig): Promise<SimulationResult> {
    const results: SimulationResult = {
      finalBalances: [],
      maxDrawdowns: [],
      profitFactors: [],
      winRates: [],
      metrics: {
        expectedValue: 0,
        standardDeviation: 0,
        confidence95: [0, 0],
        maxDrawdown: 0,
        successRate: 0
      }
    };

    // Run simulations in parallel using Web Workers
    const simulations = await Promise.all(
      Array(config.numSimulations).fill(0).map(() =>
        this.runSingleSimulation(config)
      )
    );

    // Aggregate results
    simulations.forEach(sim => {
      results.finalBalances.push(sim.finalBalance);
      results.maxDrawdowns.push(sim.maxDrawdown);
      results.profitFactors.push(sim.profitFactor);
      results.winRates.push(sim.actualWinRate);
    });

    // Calculate metrics
    results.metrics = {
      expectedValue: this.calculateMean(results.finalBalances),
      standardDeviation: this.calculateStdDev(results.finalBalances),
      confidence95: this.calculateConfidenceInterval(results.finalBalances),
      maxDrawdown: Math.max(...results.maxDrawdowns),
      successRate: results.finalBalances.filter(b => b > config.initialBalance).length / config.numSimulations
    };

    return results;
  }

  private async runSingleSimulation(config: SimulationConfig) {
    let balance = config.initialBalance;
    let maxBalance = balance;
    let maxDrawdown = 0;
    let wins = 0;
    let grossProfit = 0;
    let grossLoss = 0;

    for (let i = 0; i < config.numTrades; i++) {
      const isWin = Math.random() < config.winRate;
      const positionSize = balance * config.positionSizing;
      
      if (isWin) {
        const profit = positionSize * config.averageWin;
        balance += profit;
        grossProfit += profit;
        wins++;
      } else {
        const loss = positionSize * config.averageLoss;
        balance -= loss;
        grossLoss += loss;
      }

      maxBalance = Math.max(maxBalance, balance);
      const drawdown = (maxBalance - balance) / maxBalance;
      maxDrawdown = Math.max(maxDrawdown, drawdown);

      if (drawdown > config.maxDrawdown || balance <= 0) {
        break;
      }
    }

    return {
      finalBalance: balance,
      maxDrawdown,
      profitFactor: grossLoss === 0 ? Infinity : grossProfit / grossLoss,
      actualWinRate: wins / config.numTrades
    };
  }

  private calculateMean(values: number[]): number {
    return values.reduce((a, b) => a + b, 0) / values.length;
  }

  private calculateStdDev(values: number[]): number {
    const mean = this.calculateMean(values);
    const squareDiffs = values.map(value => Math.pow(value - mean, 2));
    return Math.sqrt(this.calculateMean(squareDiffs));
  }

  private calculateConfidenceInterval(values: number[]): [number, number] {
    const mean = this.calculateMean(values);
    const stdDev = this.calculateStdDev(values);
    const marginOfError = 1.96 * (stdDev / Math.sqrt(values.length));
    return [mean - marginOfError, mean + marginOfError];
  }
}

export const monteCarloSimulation = new MonteCarloSimulation(); 