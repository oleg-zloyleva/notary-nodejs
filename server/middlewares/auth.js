const jwt = require('jsonwebtoken');
const User = require('../models/users');
const BlackList = require('../models/blacklist');
const { unauthorizedResponseHandler } = require('../helpers/http');

module.exports = async (req,res,next) => {
    try {
        let token = null;
        if ( req.header('Authorization') && (token = req.header('Authorization').replace('Bearer ', '')) && token) {

            req.tokenData = jwt.verify(token, process.env.JWT_KEY);
            const tokenInList = await BlackList.findOne({
                token
            });
            if (tokenInList) return unauthorizedResponseHandler(res, 'Unauthorized user');
            const user = await User.findOne({
                phone: req.tokenData.phone
            });

            if (!user) return unauthorizedResponseHandler(res, 'Unauthorized user');
            req.token = token;
            req.user = user;
            next();
        } else {
            return unauthorizedResponseHandler(res, 'Access token is required');
        }
    }catch (e) {
        console.log("ERROR\n", e.message);
        return unauthorizedResponseHandler(res, `Access token is required, ${e.message}`);
    }
};
