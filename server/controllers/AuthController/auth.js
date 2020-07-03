const User = require('../../models/users');
const CustomError = require('../../errors/customError');
const {catchResponseHandler,notFoundResponseHandler} = require('../../helpers/http');
const {getSMSCode, getNewPassword, getToken} = require('../../helpers/func');

exports.login = async (req, res) => {
    try {
        const token = await User.loginUserReturnToken(req.body);
        return res.json({token})
    } catch (e) {
        // todo logger ERROR
        console.log(e);
        return catchResponseHandler(e,res, "Can't login current user");
    }
};

exports.register = async (req, res) => {
    try {
        const sms_code = getSMSCode();
        await User.init();
        // todo update with upsert = true, filter: phone and phone_verified_at => $exists: false
        const newUser = await User.create({
            name: req.body.name,
            password: getNewPassword(req.body.password),
            phone: req.body.phone,
            sms_code,
        });

        return res.json({
            data: process.env.NODE_ENV === 'development' ? newUser : true,// todo remove after
        })
    } catch (e) {
        // todo logger ERROR
        console.log(e);
        return catchResponseHandler(e,res, "Can't create new user");
    }
};

exports.activate = async (req, res) => {
    try {
        const {sms_code} = req.body;

        const user = await User.findOneAndUpdate(
            {
                sms_code,
                phone_verified_at: {
                    $exists: false
                }
            },
            {
                phone_verified_at: Date.now(),
                sms_code: null,
            }
        );

        if (!user) throw new CustomError('User for activation is not found',404);

        return res.json({
            token: getToken(user)
        })
    } catch (e) {
        // todo logger ERROR
        console.log(e);
        return catchResponseHandler(e,res, "Can't activate user");
    }
};

exports.logout = async (req,res) => {
    try{
        await BlackList.create({
            token: req.token,
            expiresAt: req.tokenData.exp * 1000,
        });

        return res.json({
            data: "ok",
        })
    }catch (e) {
        // todo logger ERROR
        console.log(e);
        return catchResponseHandler(e,res, "Can't logout user");
    }
};
