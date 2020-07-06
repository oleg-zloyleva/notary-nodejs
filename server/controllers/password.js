const router = require('express').Router();
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/auth');
const BlackList = require('../models/blacklist');
const User = require('../models/users');
const config = require('../config/appSettings');
const {catchResponseHandler,notFoundResponseHandler} = require('../helpers/http');
const {getNewPassword,getSMSCode} = require('../helpers/func');

router.post('/change', auth, async (req,res,next) => {
    try {
        // update password
        await User.updateOne(
            {_id: req.user._id},
            {password: getNewPassword(req.body.password),},
        );
        // invalidate token
        await BlackList.create({
            token: req.token,
            expiresAt: req.tokenData.exp * 1000,
        });
        return res.json({
            data: 'Password was changed. User is logout'
        })
    }catch (e) {
        return next(e);
    }
});

router.post('/reset', async (req, res, next) => {
    try {
        const user = await User.findOne({
            phone: req.body.phone,
            phone_verified_at: {
                $exists: true
            },
        });
        if (!user) return notFoundResponseHandler(res,'User not found');
        user.new_phone = req.body.new_phone;
        // todo send SMS
        user.sms_code = getSMSCode();
        user.save();

        return res.json({
            data: process.env.NODE_ENV === 'development' ? user : true,// todo remove after
        })
    }catch (e) {
        // // todo logger ERROR
        // console.log(e);
        // return catchResponseHandler(e,res, "Can't get sms code");
        return next(e);
    }
});

router.patch('/reset', async (req, res, next) => {
    try {
        const user = await User.findOne({
            sms_code: req.body.sms_code,
            phone_verified_at: {
                $exists: true
            },
        });
        if (!user) return notFoundResponseHandler(res,'User not found');
        user.password = getNewPassword(req.body.password);
        user.sms_code = null;
        user.save();

        const token = jwt.sign(
            {phone: user.phone},
            config.jwtSalt,
            { expiresIn: +config.expiresIn * 1000 }
        );

        return res.json({
            token
        })
    }catch (e) {
        // // todo logger ERROR
        // console.log(e);
        // return catchResponseHandler(e,res, "Can't get sms code");
        return next(e);
    }
});

module.exports = router;