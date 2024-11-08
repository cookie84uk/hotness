import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Select,
  MenuItem,
  Chip,
  Box,
  Button,
  IconButton
} from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { tradeJournal } from '../services/journal/TradeJournal';

interface JournalEntryFormProps {
  tradeId: string;
  onSave: () => void;
}

export const JournalEntryForm = ({ tradeId, onSave }: JournalEntryFormProps) => {
  const [entry, setEntry] = useState({
    strategy: '',
    emotions: 'neutral' as const,
    notes: '',
    lessons: [''],
    tags: ['']
  });

  const handleSubmit = () => {
    const trade = paperTradingService.getTrade(tradeId);
    if (!trade) return;

    tradeJournal.addEntry({
      tradeId,
      mint: trade.mint,
      entryPrice: trade.entryPrice,
      exitPrice: trade.exitPrice,
      amount: trade.amount,
      profit: trade.profit,
      timestamp: Date.now(),
      ...entry,
      lessons: entry.lessons.filter(Boolean),
      tags: entry.tags.filter(Boolean)
    });

    onSave();
  };

  return (
    <Card>
      <CardContent>
        <Box display="flex" flexDirection="column" gap={2}>
          <Select
            value={entry.strategy}
            onChange={(e) => setEntry({ ...entry, strategy: e.target.value })}
            label="Strategy"
          >
            <MenuItem value="momentum">Momentum</MenuItem>
            <MenuItem value="breakout">Breakout</MenuItem>
            <MenuItem value="whale-following">Whale Following</MenuItem>
            <MenuItem value="hotness-score">Hotness Score</MenuItem>
          </Select>

          <Select
            value={entry.emotions}
            onChange={(e) => setEntry({ 
              ...entry, 
              emotions: e.target.value as typeof entry.emotions 
            })}
            label="Emotions"
          >
            <MenuItem value="calm">Calm</MenuItem>
            <MenuItem value="excited">Excited</MenuItem>
            <MenuItem value="fearful">Fearful</MenuItem>
            <MenuItem value="greedy">Greedy</MenuItem>
            <MenuItem value="neutral">Neutral</MenuItem>
          </Select>

          <TextField
            multiline
            rows={4}
            value={entry.notes}
            onChange={(e) => setEntry({ ...entry, notes: e.target.value })}
            label="Trade Notes"
          />

          <Box>
            <Typography variant="subtitle2">Lessons Learned</Typography>
            {entry.lessons.map((lesson, index) => (
              <Box key={index} display="flex" gap={1} mb={1}>
                <TextField
                  value={lesson}
                  onChange={(e) => {
                    const newLessons = [...entry.lessons];
                    newLessons[index] = e.target.value;
                    setEntry({ ...entry, lessons: newLessons });
                  }}
                  fullWidth
                />
                <IconButton
                  onClick={() => {
                    const newLessons = entry.lessons.filter((_, i) => i !== index);
                    setEntry({ ...entry, lessons: newLessons });
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
            <Button
              startIcon={<AddIcon />}
              onClick={() => setEntry({ 
                ...entry, 
                lessons: [...entry.lessons, ''] 
              })}
            >
              Add Lesson
            </Button>
          </Box>

          <Box>
            <Typography variant="subtitle2">Tags</Typography>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {entry.tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag || 'New Tag'}
                  onDelete={() => {
                    const newTags = entry.tags.filter((_, i) => i !== index);
                    setEntry({ ...entry, tags: newTags });
                  }}
                  onClick={() => {/* Add tag edit functionality */}}
                />
              ))}
              <Chip
                icon={<AddIcon />}
                label="Add Tag"
                onClick={() => setEntry({ 
                  ...entry, 
                  tags: [...entry.tags, ''] 
                })}
              />
            </Box>
          </Box>

          <Button 
            variant="contained" 
            onClick={handleSubmit}
            disabled={!entry.strategy || !entry.notes}
          >
            Save Journal Entry
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}; 