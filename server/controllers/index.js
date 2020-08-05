const router = require('express').Router();
const { apiPrefix } = require('../config/appSettings');
const { docTypes } = require('../helpers/constants');

router.use(`${apiPrefix}/auth`, require('./AuthController/auth.router'));
router.use(`${apiPrefix}/password`, require('./PasswordController/password.router'));
router.use(`${apiPrefix}/phone`, require('./PhoneController/phone.router'));
router.use(`${apiPrefix}/profile`, require('./UserProfileController/profile.router'));

router.use(`${apiPrefix}/type_a`, require('./docTypesRouter')(docTypes.a));
router.use(`${apiPrefix}/type_b`, require('./docTypesRouter')(docTypes.b));
router.use(`${apiPrefix}/type_c`, require('./docTypesRouter')(docTypes.c));
router.use(`${apiPrefix}/type_d`, require('./docTypesRouter')(docTypes.d));
router.use(`${apiPrefix}/type_e`, require('./docTypesRouter')(docTypes.e));
router.use(`${apiPrefix}/type_f`, require('./docTypesRouter')(docTypes.f));
router.use(`${apiPrefix}/type_g`, require('./docTypesRouter')(docTypes.g));
router.use(`${apiPrefix}/type_h`, require('./docTypesRouter')(docTypes.h));

router.use(`${apiPrefix}/screens`, require('./ScreenImageController/screenImage.router'));
router.use(`${apiPrefix}/docs`, require('./docsListController/docsList.router'));

module.exports = router;
