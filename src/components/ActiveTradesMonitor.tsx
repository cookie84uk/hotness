import { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Slider,
  IconButton,
  Tooltip,
  LinearProgress
} from '@mui/material';
import { Edit as EditIcon, Close as CloseIcon } from '@mui/icons-material';
import { tradeMonitor } from '../services/trading/TradeMonitor';
import { formatDistance } from 'date-fns';

import React, { useState, useEffect } from 'react';
import { PaperTrade } from '../types';
import { paperTradingService } from '../services/paperTrading/PaperTradingService';
import { priceService } from '../services/price/PriceService';

interface ActiveTradesMonitorProps {
    onTradeSelect?: (trade: PaperTrade) => void;
}

const ActiveTradesMonitor: React.FC<ActiveTradesMonitorProps> = ({ onTradeSelect }) => {
    const [activeTrades, setActiveTrades] = useState<PaperTrade[]>([]);
    const [currentPrices, setCurrentPrices] = useState<Record<string, number>>({});

    useEffect(() => {
        // Load active trades
        const loadTrades = async () => {
            const trades = await paperTradingService.getActiveTrades();
            setActiveTrades(trades);
        };
        loadTrades();

        // Subscribe to price updates
        const priceSubscription = priceService.subscribeToPrices((prices) => {
            setCurrentPrices(prices);
        });

        return () => {
            priceSubscription.unsubscribe();
        };
    }, []);

    // ... rest of your component code ...
};

export default ActiveTradesMonitor;