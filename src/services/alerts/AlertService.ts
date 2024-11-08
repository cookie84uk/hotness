import { toast } from 'react-toastify';
import { scoreManager } from '../scoring/ScoreManager';
import { TokenData } from '../../types';

interface AlertConfig {
  hotnessThreshold: number;
  volumeThreshold: number;
  priceChangeThreshold: number;
}

export class AlertService {
  private config: AlertConfig = {
    hotnessThreshold: 80,
    volumeThreshold: 100, // SOL
    priceChangeThreshold: 0.2 // 20%
  };

  private alertedTokens: Set<string> = new Set();

  constructor() {
    this.initializeListeners();
  }

  private initializeListeners() {
    scoreManager.addGlobalListener((mint: string, score: number) => {
      this.checkHotnessAlert(mint, score);
    });
  }

  private checkHotnessAlert(mint: string, score: number) {
    if (score >= this.config.hotnessThreshold && !this.alertedTokens.has(mint)) {
      this.alertedTokens.add(mint);
      
      toast.success(`🔥 Token ${mint} is heating up! Score: ${score}`, {
        position: "bottom-right",
        autoClose: 5000,
        onClick: () => {
          // Navigate to token details or open trading modal
          // Implementation depends on your routing setup
        }
      });

      // Reset alert after cooldown
      setTimeout(() => {
        this.alertedTokens.delete(mint);
      }, 5 * 60 * 1000); // 5 minutes cooldown
    }
  }

  setConfig(newConfig: Partial<AlertConfig>) {
    this.config = { ...this.config, ...newConfig };
  }
}

export const alertService = new AlertService(); 