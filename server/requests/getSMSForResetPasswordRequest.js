const { check } = require('express-validator');

const rules = [
  check('phone')
    .exists().withMessage('Field is require')
    .isLength({ min: 10, max: 12 })
    .withMessage('Not correct length of phone'),
];

module.exports = rules;
