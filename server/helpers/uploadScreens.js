const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');
const mime = require('mime');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    try {
      // todo move resolve uploads PATH
      const { user, document } = req;
      fs.mkdirSync(path.resolve(__dirname, `./../uploads/${user._id}/${document._id}`), { recursive: true }, (err) => {
        if (err) throw err;
      });
      cb(null, path.resolve(__dirname, `./../uploads/${user._id}/${document._id}`));
    } catch (e) {

    }
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    ext = ext.length > 1 ? ext : '.' + `.${mime.getExtension(file.mimetype)}`;
    const uploadFileName = `${Date.now()}-${crypto.createHash('md5').update(file.originalname).digest('hex')}${ext}`;
    cb(null, uploadFileName);
  },
});
module.exports = multer({ storage });
