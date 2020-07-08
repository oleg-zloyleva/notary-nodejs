const router = require('express').Router();
const auth = require('../../middlewares/auth');
const UserProfileController = require('./profile');

router.get('/', auth, UserProfileController.getMyProfile);
router.put('/', auth, UserProfileController.updateMyProfile);

module.exports = router;