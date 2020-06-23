const router = require('express').Router();
const apiPrefix = require('../config/appSettings').apiPrefix;

router.use(`${apiPrefix}/auth`, require('./auth'));

module.exports = router;