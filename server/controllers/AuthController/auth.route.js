const router = require('express').Router();

const auth = require('../../middlewares/auth');

const { login, register, activate, logout } = require('./auth');
const loginRequest = require('../../requests/loginRequest');
const { checkValidation } = require('../../validators/http');

router.post('/login',loginRequest, checkValidation, login);
router.post('/register', register);
router.post('/activate', activate);
router.get('/logout', auth, logout);

module.exports = router;
