const router = require('express').Router();
const apiPrefix = require('../config/appSettings').apiPrefix;

router.use(`${apiPrefix}/auth`, require('./auth'));
router.use(`${apiPrefix}/password`, require('./password'));

module.exports = router;