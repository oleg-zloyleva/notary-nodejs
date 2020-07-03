const router = require('express').Router();
const auth = require('../middlewares/auth');
const {catchResponseHandler} = require('../helpers/http');

router.get('/', auth, (req, res) => {
    return res.json({
        data: req.user,
    })
});

router.put('/', auth, async (req, res) => {
    try {
        const user = req.user;
        user.name = req.body.name;
        user.last_name = req.body.last_name;
        user.patronymic = req.body.patronymic;
        user.passport_series = req.body.passport_series;
        user.passport_number = req.body.passport_number;
        user.passport_issued = req.body.passport_issued;
        user.passport_issued_date = req.body.passport_issued_date;
        user.idn = req.body.idn;
        user.birth_day = req.body.birth_day;
        user.save();

        return res.json({
            data: user,
        })
    }catch (e) {
        // todo logger ERROR
        console.log(e);
        return catchResponseHandler(e,res, "Can't send code for change user's phone");
    }
});

module.exports = router;