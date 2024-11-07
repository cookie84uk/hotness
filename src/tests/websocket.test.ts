import { getWebSocketService } from '../services/socketService';
import { mockTrade, mockAnalysis } from '../utils/testData';

function testWebSocket() {
  const ws = getWebSocketService();

  // Add listeners
  ws.addStatusListener((status) => {
    console.log('WebSocket Status:', status);
  });

  ws.addErrorListener((error) => {
    console.error('WebSocket Error:', error);
  });

  ws.addListener((analysis) => {
    console.log('Received Analysis:', analysis);
  });

  // Connect and test
  ws.connect();

  // Simulate some scenarios after connection
  setTimeout(() => {
    console.log('Running tests...');
    
    // Test 1: Simulate trade data
    ws.simulateTradeMessage(mockTrade);

    // Test 2: Simulate error
    ws.simulateError('TEST_ERROR', 'This is a test error');

    // Test 3: Simulate status change
    ws.simulateStatusChange('error');

    // Test 4: Disconnect
    ws.disconnect();
  }, 2000);
}

// Run the test
testWebSocket(); 