const router = require('express').Router();

const auth = require('../../middlewares/auth');

const { login, register, activate, logout } = require('./auth');
const loginRequest = require('../../requests/loginRequest');
const registerRequest = require('../../requests/registerRequest');
const SMSCodeRequest = require('../../requests/SMSCodeRequest');
const { checkValidation } = require('../../validators/http');

router.post('/login',loginRequest, checkValidation, login);
router.post('/register',registerRequest,checkValidation, register);
router.post('/activate',SMSCodeRequest,checkValidation, activate);
router.get('/logout', auth, logout);

module.exports = router;
