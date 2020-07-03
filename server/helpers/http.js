const CustomError = require('../errors/customError');

exports.catchResponseHandler = (e,res,errMsg) => {
    const data = (e instanceof CustomError)
        ? {status:e._statusCode,title:e.message,}
        : {status:500,title:errMsg};
    return res.status(data.status).json({
        errors: [data]
    });
};

exports.notFoundResponseHandler = (res,errMsg) => {
    return res.status(404).json({
        errors: [
            {
                status: 404,
                title:  errMsg,
            }
        ]
    });
};

exports.unauthorizedResponseHandler = (res,errMsg) => {
    return res.status(401).json({
        errors: [
            {
                status: 401,
                title:  errMsg,
            }
        ]
    });
};
