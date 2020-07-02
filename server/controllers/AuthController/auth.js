const User = require('../../models/users');
const {catchResponseHandler,notFoundResponseHandler} = require('../../helpers/http');
const {getSMSCode, getNewPassword, getToken,isPasswordCorrect} = require('../../helpers/func');

exports.login = async (req, res) => {
    try {
        const {phone, password} = req.body;
        // Find & check password -> user || Exception

        const user = await User.loginUserReturnToken(req.body);

        // const user = await User.findOne({phone});

        // if (!user) return notFoundResponseHandler(res,'User not found');
        if ( isPasswordCorrect(password, user) ) {
            const token = getToken(user);

            return res.json({
                token
            })
        }else {
            return res.status(401).json({
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
        return catchResponseHandler(res, "Can't create new user");
    }
};

exports.activate = async (req, res) => {
    try {
        const {sms_code} = req.body;
        const user = await User.findOne({
            sms_code,
            phone_verified_at: {
                $exists: false
            }
        });

        if (!user) return notFoundResponseHandler(res,'User for activation is not found');
        const token = getToken(user);

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
        return catchResponseHandler(res, "Can't logout user");
    }
};
