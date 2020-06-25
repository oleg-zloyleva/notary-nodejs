const router = require('express').Router();
const path = require('path');
const crypto = require("crypto");
const fs = require('fs');

const ScreenImage = require('../models/ScreenImage');

const mime = require('mime');
const auth = require('../middlewares/auth');
const multer  = require('multer');

const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
        try {
            // todo move resolve uploads PATH
            await fs.mkdir(path.resolve(__dirname,`./../uploads/${req.user._id}`), { recursive: true }, (err) => {
                if (err) throw err;
            });
            cb(null, path.resolve(__dirname,`./../uploads/${req.user._id}`))
        }catch (e) {

        }
    },
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        ext = ext.length>1 ? ext : "." + `.${mime.getExtension(file.mimetype)}`;
        const uploadFileName = `${Date.now()}-${crypto.createHash("md5").update(file.originalname).digest("hex")}${ext}`;
        cb(null, uploadFileName);
    }
});
const upload = multer({ storage });

router.post('/', auth, upload.fields([{ name: 'passport', maxCount: 5 },{ name: 'inn', maxCount: 10 }]), async (req, res) => {
    // console.log("REQ",req.files);
    res.json({})
});

module.exports = router;