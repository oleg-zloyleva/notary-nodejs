const User = require('../../models/users');
const {catchResponseHandler} = require('../../helpers/http');

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
        const data = await User.registerNewUser(req.body);
        return res.json({data})
    } catch (e) {
        // todo logger ERROR
        console.log(e);
        return catchResponseHandler(e,res, "Can't create new user");
    }
};

exports.activate = async (req, res) => {
    try {
        const token = await User.activateUsersBySMS(req.body);
        return res.json({token})
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
            expiresAt: req.tokenData.exp * 1000, // todo cron check this value & delete document if date old
        });

        return res.json({
            data: true,
        })
    }catch (e) {
        // todo logger ERROR
        console.log(e);
        return catchResponseHandler(e,res, "Can't logout user");
    }
};
