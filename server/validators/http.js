const { validationResult } = require('express-validator');
const CustomError = require('../errors/customError');

exports.checkValidation = (req, res, next) => {
    const errors = validationResult(req).formatWith(
        ({ msg, param }) => ({
            status: "422",
            title: `${param}: ${msg}`
        })
    );
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }
// throw new CustomError("ERROR checkValidation",422);
    next();
};