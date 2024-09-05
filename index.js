const client = require('./src/config/clientConfig');
const messageController = require('./src/controllers/messageController');
const qrCodeUtil = require('./src/utils/qrCodeUtil');

client.on('qr', (qr) => {
  qrCodeUtil.generateQRCode(qr);
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', messageController.handleMessage);

client.initialize();