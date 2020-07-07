const router = require('express').Router();
const auth = require('../../middlewares/auth');
const PhoneController = require('./phone');
const SMSCodeRequest = require('../../requests/SMSCodeRequest');
const getSMSForChangePhoneRequest = require('../../requests/getSMSForChangePhoneRequest');
const { checkValidation } = require('../../validators/http');

router.post('/change', auth,getSMSForChangePhoneRequest, checkValidation, PhoneController.getSMSForChangePhone);
router.patch('/change', auth,SMSCodeRequest, checkValidation, PhoneController.changePhone);

module.exports = router;