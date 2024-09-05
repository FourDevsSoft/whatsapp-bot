const qrcode = require('qrcode-terminal');

exports.generateQRCode = (qr) => {
  qrcode.generate(qr, { small: true });
};