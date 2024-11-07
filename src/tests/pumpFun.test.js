import WebSocket from 'ws';

function testPumpFunConnection() {
    console.log('Starting PumpFun WebSocket test...');
    
    const ws = new WebSocket('wss://frontend-api.pump.fun/socket.io/?EIO=4&transport=websocket');
    
    ws.on('open', () => {
        console.log('Connected to pump.fun WebSocket');
        
        // Send Socket.IO connection message
        ws.send('40');
        
        // Subscribe to token updates
        const subscribeMsg = '42["subscribe",{"channel":"tokens"}]';
        ws.send(subscribeMsg);
        console.log('Subscribed to token updates');
    });

    ws.on('message', (data) => {
        const message = data.toString();
        console.log('Raw:', message);

        // Handle Socket.IO messages
        if (message.startsWith('42')) {
            try {
                const payload = JSON.parse(message.slice(2));
                console.log('Event:', payload[0]);
                console.log('Data:', payload[1]);
            } catch (e) {
                console.log('Failed to parse message payload');
            }
        }
        // Handle ping messages
        else if (message === '2') {
            ws.send('3'); // Respond with pong
        }
    });

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });

    ws.on('close', () => {
        console.log('Connection closed');
    });

    // Keep connection alive for testing
    setTimeout(() => {
        ws.close();
        console.log('Test completed');
        process.exit(0);
    }, 60000); // Run for 1 minute
}

// Run the test
testPumpFunConnection(); 