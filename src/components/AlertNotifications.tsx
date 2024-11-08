import React, { useEffect, useState } from 'react';
import { Alert as AlertType, alertService } from '../services/notifications/AlertService';
import { Snackbar, Alert } from '@mui/material';

const AlertNotifications: React.FC = () => {
    const [alerts, setAlerts] = useState<AlertType[]>([]);

    useEffect(() => {
        const unsubscribe = alertService.subscribe((alert) => {
            setAlerts(prev => [...prev, alert]);
        });

        return () => unsubscribe();
    }, []);

    const handleClose = (alertId: string) => {
        setAlerts(prev => prev.filter(a => a.id !== alertId));
    };

    return (
        <>
            {alerts.map((alert) => (
                <Snackbar 
                    key={alert.id}
                    open={true}
                    autoHideDuration={6000}
                    onClose={() => handleClose(alert.id)}
                >
                    <Alert 
                        severity={alert.type}
                        onClose={() => handleClose(alert.id)}
                    >
                        {alert.message}
                    </Alert>
                </Snackbar>
            ))}
        </>
    );
};

export default AlertNotifications; 