const router = require('express').Router();
const ScreenImageController = require('./screenImage');
const auth = require('../../middlewares/auth');

router.get('/:id', auth, ScreenImageController.findOne);

module.exports = router;
