const router = require('express').Router();
const auth = require('../../middlewares/auth');
const passwordHandlers = require('./password');
const changePasswordRequest = require('../../requests/changePasswordRequest');
const getSMSForResetPasswordRequest = require('../../requests/getSMSForResetPasswordRequest');
const resetPasswordRequest = require('../../requests/resetPasswordRequest');
const { checkValidation } = require('../../validators/http');

router.post('/change', auth, changePasswordRequest, checkValidation, passwordHandlers.changePassword);
router.post('/reset',getSMSForResetPasswordRequest, checkValidation, passwordHandlers.getSMSForResetPassword);
router.patch('/reset',resetPasswordRequest, checkValidation, passwordHandlers.resetPassword);

module.exports = router;