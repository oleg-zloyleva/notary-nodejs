const router = require('express').Router();
const { apiPrefix } = require('../config/appSettings');

router.use(`${apiPrefix}/auth`, require('./AuthController/auth.router'));
router.use(`${apiPrefix}/password`, require('./PasswordController/password.router'));
router.use(`${apiPrefix}/phone`, require('./PhoneController/phone.router'));
router.use(`${apiPrefix}/profile`, require('./UserProfileController/profile.router'));

router.use(`${apiPrefix}/type_a`, require('./docTypeAController/docTypeA.router'));
router.use(`${apiPrefix}/type_b`, require('./docTypeBController/docTypeB.router'));
router.use(`${apiPrefix}/type_b`, require('./docTypeBController/docTypeB.router'));

router.use(`${apiPrefix}/screens`, require('./ScreenImageController/screenImage.router'));

module.exports = router;
