const router = require('express').Router();
const apiPrefix = require('../config/appSettings').apiPrefix;

router.use(`${apiPrefix}/auth`, require('./auth'));
router.use(`${apiPrefix}/password`, require('./password'));
router.use(`${apiPrefix}/phone`, require('./phone'));
router.use(`${apiPrefix}/profile`, require('./profile'));

module.exports = router;