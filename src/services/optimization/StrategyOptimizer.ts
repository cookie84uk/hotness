interface OptimizationParameter {
  name: string;
  min: number;
  max: number;
  step: number;
  current: number;
}

interface OptimizationResult {
  parameters: Record<string, number>;
  metrics: {
    expectedValue: number;
    sharpeRatio: number;
    maxDrawdown: number;
    winRate: number;
  };
}

export class StrategyOptimizer {
  async optimizeStrategy(
    parameters: OptimizationParameter[],
    evaluationFunction: (params: Record<string, number>) => Promise<number>,
    generations: number = 50,
    populationSize: number = 30
  ): Promise<OptimizationResult[]> {
    let population = this.initializePopulation(parameters, populationSize);
    const results: OptimizationResult[] = [];

    for (let gen = 0; gen < generations; gen++) {
      // Evaluate fitness for each set of parameters
      const evaluations = await Promise.all(
        population.map(async params => ({
          params,
          fitness: await evaluationFunction(params)
        }))
      );

      // Sort by fitness
      evaluations.sort((a, b) => b.fitness - a.fitness);

      // Store best results
      results.push(await this.evaluateParameters(evaluations[0].params));

      // Create next generation
      population = this.createNextGeneration(
        evaluations.map(e => e.params),
        parameters
      );
    }

    return results;
  }

  private initializePopulation(
    parameters: OptimizationParameter[],
    size: number
  ): Record<string, number>[] {
    return Array(size).fill(0).map(() => {
      const params: Record<string, number> = {};
      parameters.forEach(param => {
        params[param.name] = this.randomInRange(param.min, param.max, param.step);
      });
      return params;
    });
  }

  private createNextGeneration(
    population: Record<string, number>[],
    parameters: OptimizationParameter[]
  ): Record<string, number>[] {
    const eliteSize = Math.floor(population.length * 0.2);
    const newPopulation = [...population.slice(0, eliteSize)];

    while (newPopulation.length < population.length) {
      const parent1 = this.selectParent(population);
      const parent2 = this.selectParent(population);
      const child = this.crossover(parent1, parent2);
      this.mutate(child, parameters);
      newPopulation.push(child);
    }

    return newPopulation;
  }

  private selectParent(population: Record<string, number>[]): Record<string, number> {
    // Tournament selection
    const tournamentSize = 3;
    const tournament = Array(tournamentSize).fill(0)
      .map(() => population[Math.floor(Math.random() * population.length)]);
    return tournament[0]; // Simplified selection for brevity
  }

  private crossover(
    parent1: Record<string, number>,
    parent2: Record<string, number>
  ): Record<string, number> {
    const child: Record<string, number> = {};
    Object.keys(parent1).forEach(key => {
      child[key] = Math.random() < 0.5 ? parent1[key] : parent2[key];
    });
    return child;
  }

  private mutate(
    params: Record<string, number>,
    parameters: OptimizationParameter[]
  ) {
    parameters.forEach(param => {
      if (Math.random() < 0.1) { // 10% mutation rate
        params[param.name] = this.randomInRange(param.min, param.max, param.step);
      }
    });
  }

  private randomInRange(min: number, max: number, step: number): number {
    const steps = Math.floor((max - min) / step);
    return min + (Math.floor(Math.random() * steps) * step);
  }

  private async evaluateParameters(
    params: Record<string, number>
  ): Promise<OptimizationResult> {
    // Run backtest with parameters
    const backtest = await backtestService.runBacktest(/* ... */);

    return {
      parameters: params,
      metrics: {
        expectedValue: backtest.totalProfit,
        sharpeRatio: this.calculateSharpeRatio(backtest.trades),
        maxDrawdown: backtest.maxDrawdown,
        winRate: backtest.winRate
      }
    };
  }
}

export const strategyOptimizer = new StrategyOptimizer(); 