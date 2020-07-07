const router = require('express').Router();
const apiPrefix = require('../config/appSettings').apiPrefix;

router.use(`${apiPrefix}/auth`, require('./AuthController/auth.router'));
router.use(`${apiPrefix}/password`, require('./PasswordController/password.router'));
router.use(`${apiPrefix}/phone`, require('./phone'));
router.use(`${apiPrefix}/profile`, require('./profile'));

router.use(`${apiPrefix}/proxy_a`, require('./docProxyTypeA'));

router.use(`${apiPrefix}/uploads`, require('./uploads'));

module.exports = router;
