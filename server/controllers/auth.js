const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const config = require('../config/appSettings');
const auth = require('../middlewares/auth');
const {catchResponseHandler,notFoundResponseHandler} = require('../helpers/http');
const {getSMSCode} = require('../helpers/func');

router.post('/login', async (req, res) => {
    try {
        const {phone, password} = req.body;
        const user = await User.findOne({phone});

        if (!user) return notFoundResponseHandler(res,'User not found');
        if ( bcrypt.compareSync(password, user.password) ) {
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
        }else {
            res.status(401).json({
                errors: [
                    {
                        status: 401,
                        title: 'Login failed! Check authentication credentials'
                    }
                ]
            });
        }

    } catch (e) {
        // todo logger ERROR
        console.log(e);
        return catchResponseHandler(res, "Can't login current user");
    }
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
        const user = await User.findOne({sms_code});

        if (!user) return notFoundResponseHandler(res,'User not found');
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

router.get('/me', auth, (req,res) => {
    res.json({
        data: req.user
    })
});

module.exports = router;
