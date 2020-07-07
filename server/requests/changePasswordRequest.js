const {check} = require('express-validator');

const rules = [
    check('password')
        .exists().withMessage('Field is require')
        .isLength({min: 6}).withMessage('must be at least 6 chars long'),
];

module.exports = rules;
