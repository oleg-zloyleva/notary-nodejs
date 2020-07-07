const {check} = require('express-validator');

const rules = [
    check('sms_code')
        .exists().withMessage('Field is require')
        .isLength({min: 4}).withMessage('Not correct length of sms_code'),
    check('password')
        .exists().withMessage('Field is require')
        .isLength({min: 6}).withMessage('must be at least 6 chars long'),
];

module.exports = rules;
