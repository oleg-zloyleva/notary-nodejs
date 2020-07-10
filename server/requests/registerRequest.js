const { check } = require('express-validator');

const rules = [
  check('name')
    .exists().withMessage('Field is require')
    .isLength({ min: 3 })
    .withMessage('Not correct length of name'),
  check('phone')
    .exists().withMessage('Field is require')
    .isLength({ min: 10, max: 12 })
    .withMessage('Not correct length of phone'),
  check('password')
    .exists().withMessage('Field is require')
    .isLength({ min: 6 })
    .withMessage('must be at least 6 chars long'),
];

module.exports = rules;
