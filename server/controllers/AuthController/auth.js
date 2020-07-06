const User = require('../../models/users');

exports.login = async (req, res, next) => {
    try {
        const token = await User.loginUserReturnToken(req.body);
        return res.json({token});
    } catch (e) {
        return next(e);
    }
};

exports.register = async (req, res, next) => {
    try {
        const data = await User.registerNewUser(req.body);
        return res.json({data})
    } catch (e) {
        return next(e);
    }
};

exports.activate = async (req, res, next) => {
    try {
        const token = await User.activateUsersBySMS(req.body);
        return res.json({token})
    } catch (e) {
        return next(e);
    }
};

exports.logout = async (req,res, next) => {
    try{
        await BlackList.create({
            token: req.token,
            expiresAt: req.tokenData.exp * 1000, // todo cron check this value & delete document if date old
        });

        return res.json({
            data: true,
        })
    }catch (e) {
        return next(e);
    }
};
