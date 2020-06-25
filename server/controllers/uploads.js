const router = require('express').Router();
const fileSystem = require('fs');
const path = require('path');

const mime = require('mime');
const auth = require('../middlewares/auth');

router.get('/:img', auth, (req,res) => {

    const filePath = path.join(__dirname, `../uploads/${req.user._id}/${req.params.img}`);
    // const filePath = path.join(__dirname, '../uploads/5ef342959e904e04053b0313/1593091167760-fcca7f327796218b95f24cb729c30e40.jpg');
    const stat = fileSystem.statSync(filePath);
    const mimeType = mime.getType(filePath);

    res.writeHead(200, {
        'Content-Type': mimeType,
        'Content-Length': stat.size
    });

    const readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(res);
});

module.exports = router;