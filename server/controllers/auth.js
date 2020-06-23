const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/users');
const config = require('../config/appSettings');
const {catchResponseHandler} = require('../helpers/http');

router.get('/', async (req, res) => {

    res.json({
        data: 'OK'
    })
});

router.post('/register', async (req, res) => {
    try {
        const sms_code = String(Math.ceil(Math.random()*100000000)).padStart(10,'0');
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

module.exports = router;