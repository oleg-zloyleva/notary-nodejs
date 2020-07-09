const router = require('express').Router();
const fileSystem = require('fs');
const path = require('path');

const mime = require('mime');
const auth = require('../middlewares/auth');
const CustomError = require('../errors/customError');

const DocProxyTypeA = require('../models/DocProxyTypeA');

router.get('/:img',  async (req,res, next) => {
    const {params: {img}} = req;
    const document = await DocProxyTypeA.findOne({
        'screens.filename': img
    });

    if (!document) next(new CustomError('Img not found', 404));
    const screen = document.screens.find(el => el.filename === img);
    const filePath = path.join(__dirname, `../uploads/${document.user}/${document._id}/${img}`);
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
