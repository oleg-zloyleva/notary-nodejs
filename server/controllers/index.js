const router = require('express').Router();
const { apiPrefix } = require('../config/appSettings');

router.use(`${apiPrefix}/auth`, require('./AuthController/auth.router'));
router.use(`${apiPrefix}/password`, require('./PasswordController/password.router'));
router.use(`${apiPrefix}/phone`, require('./PhoneController/phone.router'));
router.use(`${apiPrefix}/profile`, require('./UserProfileController/profile.router'));

router.use(`${apiPrefix}/type_a`, require('./docTypeAController/docTypeA.router'));
router.use(`${apiPrefix}/type_b`, require('./docTypeBController/docTypeB.router'));
router.use(`${apiPrefix}/type_c`, require('./docTypeCController/docTypeC.router'));
router.use(`${apiPrefix}/type_d`, require('./docTypeDController/docTypeD.router'));
router.use(`${apiPrefix}/type_e`, require('./docTypeEController/docTypeE.router'));
router.use(`${apiPrefix}/type_f`, require('./docTypeFController/docTypeF.router'));

router.use(`${apiPrefix}/screens`, require('./ScreenImageController/screenImage.router'));
router.use(`${apiPrefix}/docs`, require('./docsListController/docsList.router'));

module.exports = router;
