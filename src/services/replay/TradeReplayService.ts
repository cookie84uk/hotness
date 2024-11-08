interface ReplayFrame {
  timestamp: number;
  price: number;
  volume: number;
  hotness: number;
  trades: Trade[];
  whaleActivity: WhaleActivity[];
  userTrades: PaperTrade[];
}

interface ReplaySession {
  id: string;
  token: TokenData;
  startTime: number;
  endTime: number;
  frames: ReplayFrame[];
  speed: number;
  currentFrame: number;
  isPlaying: boolean;
}

export class TradeReplayService {
  private sessions: Map<string, ReplaySession> = new Map();
  private frameListeners: Map<string, Set<(frame: ReplayFrame) => void>> = new Map();

  async createReplaySession(
    token: TokenData,
    startTime: number,
    endTime: number
  ): Promise<string> {
    const frames = await this.loadHistoricalData(token.mint, startTime, endTime);
    
    const session: ReplaySession = {
      id: crypto.randomUUID(),
      token,
      startTime,
      endTime,
      frames,
      speed: 1,
      currentFrame: 0,
      isPlaying: false
    };

    this.sessions.set(session.id, session);
    return session.id;
  }

  private async loadHistoricalData(
    mint: string,
    startTime: number,
    endTime: number
  ): Promise<ReplayFrame[]> {
    // Load historical data from your data service
    const trades = await tradeHistoryService.getTrades(mint, startTime, endTime);
    const whaleActivity = await whaleTrackingService.getActivity(mint, startTime, endTime);
    const userTrades = paperTradingService.getTradesInRange(mint, startTime, endTime);
    const hotnessHistory = await scoreManager.getHistoricalScores(mint, startTime, endTime);

    // Group data into frames (e.g., 1-minute intervals)
    const frames: ReplayFrame[] = [];
    let currentTime = startTime;
    const FRAME_INTERVAL = 60 * 1000; // 1 minute

    while (currentTime < endTime) {
      const frameEnd = currentTime + FRAME_INTERVAL;
      
      frames.push({
        timestamp: currentTime,
        price: this.getAveragePrice(trades, currentTime, frameEnd),
        volume: this.calculateVolume(trades, currentTime, frameEnd),
        hotness: this.findClosestHotness(hotnessHistory, currentTime),
        trades: trades.filter(t => t.timestamp >= currentTime && t.timestamp < frameEnd),
        whaleActivity: whaleActivity.filter(w => w.timestamp >= currentTime && w.timestamp < frameEnd),
        userTrades: userTrades.filter(t => t.timestamp >= currentTime && t.timestamp < frameEnd)
      });

      currentTime = frameEnd;
    }

    return frames;
  }

  play(sessionId: string) {
    const session = this.sessions.get(sessionId);
    if (!session || session.isPlaying) return;

    session.isPlaying = true;
    this.playNextFrame(sessionId);
  }

  private playNextFrame(sessionId: string) {
    const session = this.sessions.get(sessionId);
    if (!session || !session.isPlaying) return;

    if (session.currentFrame >= session.frames.length) {
      session.isPlaying = false;
      return;
    }

    const frame = session.frames[session.currentFrame];
    this.notifyListeners(sessionId, frame);

    session.currentFrame++;
    setTimeout(
      () => this.playNextFrame(sessionId),
      (1000 / session.speed)
    );
  }

  pause(sessionId: string) {
    const session = this.sessions.get(sessionId);
    if (session) {
      session.isPlaying = false;
    }
  }

  setSpeed(sessionId: string, speed: number) {
    const session = this.sessions.get(sessionId);
    if (session) {
      session.speed = speed;
    }
  }

  seekTo(sessionId: string, frameIndex: number) {
    const session = this.sessions.get(sessionId);
    if (!session) return;

    session.currentFrame = Math.max(0, Math.min(frameIndex, session.frames.length - 1));
    if (session.isPlaying) {
      this.playNextFrame(sessionId);
    } else {
      this.notifyListeners(sessionId, session.frames[session.currentFrame]);
    }
  }

  addFrameListener(sessionId: string, callback: (frame: ReplayFrame) => void) {
    if (!this.frameListeners.has(sessionId)) {
      this.frameListeners.set(sessionId, new Set());
    }
    this.frameListeners.get(sessionId)!.add(callback);

    return () => {
      this.frameListeners.get(sessionId)?.delete(callback);
    };
  }

  private notifyListeners(sessionId: string, frame: ReplayFrame) {
    this.frameListeners.get(sessionId)?.forEach(callback => callback(frame));
  }
}

export const tradeReplayService = new TradeReplayService(); 