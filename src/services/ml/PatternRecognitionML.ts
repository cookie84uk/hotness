import * as tf from '@tensorflow/tfjs';
import { WindowData, PatternPrediction } from '../../types';

interface ModelFeatures {
  priceChanges: number[];
  volumeChanges: number[];
  hotnessScores: number[];
  whaleActivity: number[];
  timeFeatures: number[];
}

export class PatternRecognitionML {
  private model: tf.LayersModel | null = null;
  private readonly SEQUENCE_LENGTH = 30; // Look back period
  private readonly PATTERN_TYPES = [
    'breakout',
    'accumulation',
    'distribution',
    'momentum',
    'reversal'
  ];

  async initialize() {
    this.model = await this.createModel();
    await this.loadPretrainedWeights();
  }

  private async createModel(): Promise<tf.LayersModel> {
    const model = tf.sequential();

    // Input layer for multiple features
    model.add(tf.layers.lstm({
      units: 64,
      returnSequences: true,
      inputShape: [this.SEQUENCE_LENGTH, 5] // 5 features per timestep
    }));

    model.add(tf.layers.dropout({ rate: 0.2 }));

    model.add(tf.layers.lstm({
      units: 32,
      returnSequences: false
    }));

    model.add(tf.layers.dense({
      units: this.PATTERN_TYPES.length,
      activation: 'softmax'
    }));

    model.compile({
      optimizer: tf.train.adam(0.001),
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy']
    });

    return model;
  }

  private async loadPretrainedWeights() {
    try {
      await this.model!.loadWeights('path/to/pretrained/weights');
    } catch (error) {
      console.error('Failed to load pretrained weights:', error);
    }
  }

  async detectPatterns(windowData: WindowData): Promise<PatternPrediction[]> {
    if (!this.model) {
      throw new Error('Model not initialized');
    }

    const features = this.prepareFeatures(windowData);
    const tensorFeatures = this.featuresToTensor(features);

    const predictions = await tf.tidy(() => {
      const output = this.model!.predict(tensorFeatures) as tf.Tensor;
      return output.arraySync() as number[][];
    });

    tensorFeatures.dispose();

    return this.processPredictions(predictions[0]);
  }

  private prepareFeatures(windowData: WindowData): ModelFeatures {
    const priceChanges = this.calculateReturns(windowData.prices);
    const volumeChanges = this.calculateReturns(windowData.volumes);
    const hotnessScores = windowData.hotnessScores;
    const whaleActivity = windowData.whaleActivity.map(x => x ? 1 : 0);
    const timeFeatures = this.extractTimeFeatures(windowData.timestamps);

    return {
      priceChanges,
      volumeChanges,
      hotnessScores,
      whaleActivity,
      timeFeatures
    };
  }

  private calculateReturns(values: number[]): number[] {
    return values.slice(1).map((value, i) => 
      (value - values[i]) / values[i]
    );
  }

  private extractTimeFeatures(timestamps: number[]): number[] {
    return timestamps.map(ts => {
      const date = new Date(ts);
      return (date.getHours() * 60 + date.getMinutes()) / (24 * 60); // Normalized time of day
    });
  }

  private featuresToTensor(features: ModelFeatures): tf.Tensor {
    const featureArray = Array(this.SEQUENCE_LENGTH).fill(0).map((_, i) => [
      features.priceChanges[i] || 0,
      features.volumeChanges[i] || 0,
      features.hotnessScores[i] || 0,
      features.whaleActivity[i] || 0,
      features.timeFeatures[i] || 0
    ]);

    return tf.tensor3d([featureArray]);
  }

  private processPredictions(predictions: number[]): PatternPrediction[] {
    return predictions
      .map((probability, index) => ({
        pattern: this.PATTERN_TYPES[index],
        probability,
        confidence: this.calculateConfidence(probability)
      }))
      .filter(pred => pred.confidence > 0.6) // Only return high-confidence predictions
      .sort((a, b) => b.probability - a.probability);
  }

  private calculateConfidence(probability: number): number {
    // Adjust confidence based on historical accuracy
    const baseConfidence = probability;
    const historicalAccuracy = 0.85; // This should be calculated from validation data
    return baseConfidence * historicalAccuracy;
  }
}

export const patternRecognitionML = new PatternRecognitionML(); 