const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,  // ou false, se quiser ver a interface gráfica
    args: ['--no-sandbox', '--disable-setuid-sandbox'],  // Esses argumentos são úteis em ambientes de VPS
  },
});

module.exports = client;