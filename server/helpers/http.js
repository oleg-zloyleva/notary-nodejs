
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
exports.notFoundResponseHandler = (res,errMsg,code=404) => {
    return res.status(code).json({
        errors: [
            {
                status: code,
                title:  errMsg,
            }
        ]
    });
};