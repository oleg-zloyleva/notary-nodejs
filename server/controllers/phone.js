const router = require('express').Router();
const {getSMSCode} = require('../helpers/func');
const {catchResponseHandler} = require('../helpers/http');
const auth = require('../middlewares/auth');

router.post('/change', auth, async (req,res) => {
    try {
        const user = req.user;
        user.new_phone = req.body.new_phone;
        user.sms_code = getSMSCode();
        user.save();

        return res.json({
            data: process.env.NODE_ENV === 'development' ? user : true,// todo remove after
        })
    }catch (e) {
        // todo logger ERROR
        console.log(e);
        return catchResponseHandler(res, "Can't send code for change user's phone");
    }
});

router.patch('/change', auth, async (req,res) => {
    try {
        if (req.user.sms_code === req.body.sms_code) {
            const user = req.user;
            user.phone = user.new_phone;
            user.new_phone = null;
            user.sms_code = null;
            user.save();

            return res.json({
                data: process.env.NODE_ENV === 'development' ? user : true,// todo remove after
            })
        }
    }catch (e) {
        // todo logger ERROR
        console.log(e);
        return catchResponseHandler(res, "Can't change user's phone");
    }
});

module.exports = router;