const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const config = require('../config/appSettings');
const {catchResponseHandler} = require('../helpers/http');
const {getSMSCode} = require('../helpers/func');

router.get('/', async (req, res) => {

    res.json({
        data: 'OK'
    })
});

router.post('/register', async (req, res) => {
    try {
        const sms_code = getSMSCode();
        await User.init();
        const newUser = await User.create({
            name: req.body.name,
            password: bcrypt.hashSync(req.body.password,config.bcryptSalt),
            phone: req.body.phone,
            sms_code,
        });

        return res.json({
            data: process.env.NODE_ENV === 'development' ? newUser : true,// todo remove after
        })
    } catch (e) {
        // todo logger ERROR
        console.log(e);
        return catchResponseHandler(res, "Can't create new user");
    }
});
router.post('/activate', async (req, res) => {
    try {
        const {sms_code} = req.body;
        const user = await User.findOne({
            sms_code,
        });

        if (!user) {
            return res.status(404).json({
                errors: [
                    {
                        status: "404",
                        title:  "User not found",
                    }
                ]
            });
        }
        const token = jwt.sign(
            {phone: user.phone},
            config.jwtSalt,
            { expiresIn: +config.expiresIn * 1000 }
        );

        user.phone_verified_at = Date.now();
        user.sms_code = null;
        user.save();

        return res.json({
            token
        })
    } catch (e) {
        // todo logger ERROR
        console.log(e);
        return catchResponseHandler(res, "Can't activate user");
    }
});

module.exports = router;