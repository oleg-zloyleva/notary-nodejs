const router = require('express').Router();

const auth = require('../../middlewares/auth');

const { login, register, activate, logout } = require('./auth');
const loginRequest = require('../../requests/loginRequest');
const registerRequest = require('../../requests/registerRequest');
const activateRequest = require('../../requests/activateRequest');
const { checkValidation } = require('../../validators/http');

router.post('/login',loginRequest, checkValidation, login);
router.post('/register',registerRequest,checkValidation, register);
router.post('/activate',activateRequest,checkValidation, activate);
router.get('/logout', auth, logout);

module.exports = router;
