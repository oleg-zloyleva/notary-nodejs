const router = require('express').Router();
const auth = require('../../middlewares/auth');
const existDocMiddleware = require('../../middlewares/existDocMiddleware')('docTypeD');
const docTypeDController = require('./docTypeD');
const upload = require('../../helpers/uploadScreens');

router.get('/', auth, docTypeDController.findAll);
router.get('/:id', auth, docTypeDController.findOne);
router.patch('/:id', auth, docTypeDController.sendToCheck);
router.post('/', auth, docTypeDController.createOne);
// todo upload.fields set to current doc
router.post('/:id', auth, existDocMiddleware, upload.fields([{ name: 'passport', maxCount: 10 }, { name: 'inn', maxCount: 1 }]), docTypeDController.uploadScreens);

module.exports = router;
