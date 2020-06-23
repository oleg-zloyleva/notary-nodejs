const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    let token = null;
    if ( req.header('Authorization') && (token = req.header('Authorization').replace('Bearer ', '')) && token) {
        req.token = jwt.verify(token, process.env.JWT_KEY);
        // user?
        console.log(req.token);
        next();
    } else {
        return res.status(401).json({
            error: "Access token is required"
        })
    }
}