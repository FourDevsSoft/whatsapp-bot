const helloCommand = require('../commands/helloCommand');
const defaultCommand = require('../commands/defaultCommand');

const commandRegistry = {
  'Olá': helloCommand.execute,
  // Adicione mais comandos aqui
};

exports.getCommand = (messageBody) => {
  return commandRegistry[messageBody] || defaultCommand.execute;
};