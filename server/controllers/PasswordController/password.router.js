const router = require('express').Router();
const auth = require('../../middlewares/auth');
const passwordHandlers = require('./password');

router.post('/change', auth, passwordHandlers.changePassword);
router.post('/reset', passwordHandlers.getSMSForResetPassword);
router.patch('/reset', passwordHandlers.resetPassword);

module.exports = router;