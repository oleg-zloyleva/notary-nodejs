
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