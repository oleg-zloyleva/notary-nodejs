const router = require('express').Router();

const auth = require('../../middlewares/auth');

const { login, register, activate, logout } = require('./auth');

router.post('/login', login);
router.post('/register', register);
router.post('/activate', activate);
router.get('/logout', auth, logout);

module.exports = router;
