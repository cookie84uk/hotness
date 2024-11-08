import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

interface TradeListProps {
    trades: any[]; // Replace with proper trade type
}

export const TradeList: React.FC<TradeListProps> = ({ trades }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Entry Price</TableCell>
                    <TableCell>Exit Price</TableCell>
                    <TableCell>Profit</TableCell>
                    <TableCell>Duration</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {trades.map((trade, index) => (
                    <TableRow key={index}>
                        <TableCell>${trade.entryPrice.toFixed(2)}</TableCell>
                        <TableCell>${trade.exitPrice.toFixed(2)}</TableCell>
                        <TableCell>${trade.profit.toFixed(2)}</TableCell>
                        <TableCell>{trade.duration}s</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}; 