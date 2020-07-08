const router = require('express').Router();
const apiPrefix = require('../config/appSettings').apiPrefix;

router.use(`${apiPrefix}/auth`, require('./AuthController/auth.router'));
router.use(`${apiPrefix}/password`, require('./PasswordController/password.router'));
router.use(`${apiPrefix}/phone`, require('./PhoneController/phone.router'));
router.use(`${apiPrefix}/profile`, require('./UserProfileController/profile.router'));

router.use(`${apiPrefix}/proxy_a`, require('./DocProxyTypeAController/docProxyTypeA.router'));

router.use(`${apiPrefix}/uploads`, require('./uploads'));

module.exports = router;
