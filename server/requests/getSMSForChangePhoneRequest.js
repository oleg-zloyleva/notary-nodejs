const { check } = require('express-validator');

const rules = [
  check('new_phone')
    .exists().withMessage('Field is require')
    .isLength({ min: 10, max: 12 })
    .withMessage('Not correct length of new_phone'),
];

module.exports = rules;
