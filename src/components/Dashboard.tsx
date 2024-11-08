import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Grid,
    Link,
    Tooltip,
    Divider
} from '@mui/material';
import {
    PersonIcon,
    AccessTimeIcon
} from '@mui/icons-material';
import { TokenActivity, TimeframeStats } from '../types';
import { formatDistance } from '../utils/format';

interface DashboardProps {
    timeframeMs: keyof TimeframeStats;
}

const Dashboard: React.FC<DashboardProps> = ({ timeframeMs }) => {
    const [activities, setActivities] = useState<TokenActivity[]>([]);
    const [stats, setStats] = useState<TimeframeStats>({
        '5m': 0,
        '15m': 0,
        '1h': 0,
        '24h': 0
    });

    useEffect(() => {
        // Load data based on timeframe
        const loadData = async () => {
            try {
                // Your data loading logic here
                const timeframeData = stats[timeframeMs] || 0;
                // Update state accordingly
            } catch (error) {
                console.error('Error loading dashboard data:', error);
            }
        };

        loadData();
    }, [timeframeMs]);

    const renderTokenRow = (activity: TokenActivity) => (
        <Grid container spacing={2} alignItems="center" key={activity.mint}>
            <Grid item xs={3}>
                <Link
                    href={`/token/${activity.mint}`}
                    onClick={(e) => {
                        e.preventDefault();
                        // Your navigation logic
                    }}
                >
                    {activity.name}
                </Link>
            </Grid>
            
            <Grid item xs={3}>
                <Tooltip title="Holders">
                    <Box display="flex" alignItems="center">
                        <PersonIcon sx={{ mr: 1 }} />
                        {activity.holders.toLocaleString()}
                    </Box>
                </Tooltip>
            </Grid>
            
            <Grid item xs={3}>
                <Tooltip title="Last Activity">
                    <Box display="flex" alignItems="center">
                        <AccessTimeIcon sx={{ mr: 1 }} />
                        {formatDistance(activity.timestamp)}
                    </Box>
                </Tooltip>
            </Grid>
            
            <Grid item xs={3}>
                <Typography>
                    ${activity.price.toFixed(2)}
                </Typography>
            </Grid>
        </Grid>
    );

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>
            
            <Grid container spacing={3}>
                {activities.map(renderTokenRow)}
            </Grid>
            
            <Divider sx={{ my: 3 }} />
            
            {/* Add additional dashboard sections as needed */}
        </Box>
    );
};

export default Dashboard;

