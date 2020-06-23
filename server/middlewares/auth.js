const jwt = require('jsonwebtoken');
const User = require('../models/users');
const { unauthorizedResponseHandler } = require('../helpers/http');

module.exports = async (req,res,next) => {
    let token = null;
    if ( req.header('Authorization') && (token = req.header('Authorization').replace('Bearer ', '')) && token) {
        req.token = jwt.verify(token, process.env.JWT_KEY);
        const user = await User.findOne({
            phone: req.token.phone
        });

        if (!user) return unauthorizedResponseHandler(res, 'Unauthorized user');
        req.user = user;
        next();
    } else {
        return unauthorizedResponseHandler(res, 'Access token is required');
    }
}