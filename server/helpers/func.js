const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/appSettings');

exports.getSMSCode = () => String(Math.ceil(Math.random() * 100000000)).padStart(10, '0');

exports.getNewPassword = (password) => bcrypt.hashSync(password, config.bcryptSalt);

exports.isDevelopmentMode = () => process.env.NODE_ENV === 'development';
exports.isProductionMode = () => process.env.NODE_ENV === 'production';
exports.isTestMode = () => process.env.NODE_ENV === 'test';

exports.getToken = (user) => jwt.sign(
  { phone: user.phone },
  config.jwtSalt,
  { expiresIn: +config.expiresIn * 1000 },
);

exports.isPasswordCorrect = (password, user) => bcrypt.compareSync(password, user.password);
