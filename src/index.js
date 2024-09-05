const client = require('./config/clientConfig');
const messageController = require('./controllers/messageController');
const qrCodeUtil = require('./utils/qrCodeUtil');

client.on('qr', (qr) => {
  qrCodeUtil.generateQRCode(qr);
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', messageController.handleMessage);

client.initialize();