const router = require('express').Router();
const bcrypt = require('bcrypt');
const BlackList = require('../models/blacklist');
const auth = require('../middlewares/auth');
const User = require('../models/users');
const config = require('../config/appSettings');

router.post('/change', auth, async (req,res) => {
    // update password
    await User.updateOne(
        {_id: req.user._id},
        {password: bcrypt.hashSync(req.body.password,config.bcryptSalt),},
    );
    // invalidate token
    await BlackList.create({
        token: req.token,
        expiresAt: req.tokenData.exp * 1000,
    });
    res.json({
        data: 'Password was changed. User is logout'
    })
});

module.exports = router;