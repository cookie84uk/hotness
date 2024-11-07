const { PumpFunService } = require('../services/pumpFun');

const testPumpFunConnection = async () => {
    console.log('Starting PumpFun WebSocket test...');
    
    const pumpFunService = new PumpFunService();
    await pumpFunService.connect();

    console.log('Connected to WebSocket');

    // Keep the connection alive for testing
    setTimeout(() => {
        console.log('Test completed');
        process.exit(0);
    }, 60000); // Run for 1 minute
}

// Run the test
testPumpFunConnection().catch(console.error); 