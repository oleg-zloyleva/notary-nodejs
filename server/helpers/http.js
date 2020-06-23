
exports.catchResponseHandler = (res,errMsg,code=500) => {
    return res.status(code).json({
        errors: [
            {
                status: code,
                title:  errMsg,
            }
        ]
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