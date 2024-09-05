const messageService = require('../services/messageService');

exports.handleMessage = (message) => {
  console.log(`Received message: ${message.body}`);
  messageService.processMessage(message);
};