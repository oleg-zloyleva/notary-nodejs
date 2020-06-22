const router = require('express').Router();
const mongoose = require('mongoose');
const User = require('../models/users');

router.get('/', async (req,res) => {


    const a = await User.create({name:'Oleh',password:'123456789', 'ssss':'sdfsdfasd'});
    const u = await User.find({});
    console.log('user');

    res.json({
        data: 'OK'
    })
});

module.exports = router;