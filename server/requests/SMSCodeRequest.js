const { check } = require('express-validator');

const rules = [
  check('smsCode')
    .exists().withMessage('Field is require')
    .isLength({ min: 4 })
    .withMessage('Not correct length of smsCode'),
];

module.exports = rules;
