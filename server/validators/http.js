const { validationResult } = require('express-validator');
const ValidationsError = require('../errors/formRequestError');

exports.checkValidation = (req, res, next) => {
    const errors = validationResult(req).formatWith(
        ({ msg, param }) => ({
            status: "422",
            title: `${param}: ${msg}`
        })
    );
    if (!errors.isEmpty()) {
        const error = new ValidationsError(errors.array());
        next(error);
    }
    next();
};