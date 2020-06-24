const bcrypt = require('bcrypt');
const config = require('../config/appSettings');

exports.getSMSCode = () => String(Math.ceil(Math.random()*100000000)).padStart(10,'0');

exports.getNewPassword = password => bcrypt.hashSync(password,config.bcryptSalt);