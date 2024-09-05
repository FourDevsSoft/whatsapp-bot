const commandRegistry = require('./commandRegistry');

exports.processMessage = (message) => {
  const command = commandRegistry.getCommand(message.body);
  command(message);
};