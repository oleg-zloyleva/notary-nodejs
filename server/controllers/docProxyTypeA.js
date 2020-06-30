const router = require('express').Router();
const path = require('path');
const crypto = require("crypto");
const fs = require('fs');
const {catchResponseHandler,notFoundResponseHandler} = require('../helpers/http');

const DocProxyTypeA = require('../models/DocProxyTypeA');
const { Representative,DocProxyTypeAFields } = require('../helpers/constants');

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

router.post('/', auth, /** middleware create PATH & to req */ upload.fields([{ name: 'passport', maxCount: 10 },{ name: 'inn', maxCount: 1 }]), async (req, res) => {
    // console.log("REQ",req.files.passport);

    try {
        const document = await DocProxyTypeA.create({
            representative: req.body.representative,
            user: req.user._id,
            // access: [req.user._id], // todo set users array
        });

        res.json({
            data: true
        })
    }catch (e) {
        // todo logger ERROR
        console.log(e);
        return catchResponseHandler(res, "Can't create doc");
    }
});

router.post('/:id', auth, upload.fields([{ name: 'passport', maxCount: 10 },{ name: 'inn', maxCount: 1 }]), async (req, res) => {
    // console.log("REQ",req.files.passport);

    try {
        const document = await DocProxyTypeA.findById(req.params.id);
        if (document) {

            const fields = (document.representative === Representative.INDIVIDUAL)
                ? DocProxyTypeAFields[Representative.INDIVIDUAL]
                : DocProxyTypeAFields[Representative.ENTITY];

            fields.map(doc => {
                req.files[doc].map( async el => {

                    document[doc].push({
                        destination: el.destination,
                        filename: el.filename,
                        path: el.path,
                        // access: [req.user._id], // todo set users array
                    });
                });
            });
            document.save();

            res.json({
                data: true
            })
        } else {
            notFoundResponseHandler(res, 'Document not found')
        }
    }catch (e) {
        // todo logger ERROR
        console.log(e);
        return catchResponseHandler(res, "Can't update doc. Invalid id");
    }
});

module.exports = router;