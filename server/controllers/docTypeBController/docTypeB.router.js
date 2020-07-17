const router = require('express').Router();
const auth = require('../../middlewares/auth');
const existDocMiddleware = require('../../middlewares/existDocMiddleware')('docTypeB');
const docTypeBController = require('./docTypeB');
const upload = require('../../helpers/uploadScreens');

router.get('/', auth, docTypeBController.findAll);
router.get('/:id', auth, docTypeBController.findOne);
router.patch('/:id', auth, docTypeBController.sendToCheck);
router.post('/', auth, docTypeBController.createOne);
// todo upload.fields set to current doc
router.post('/:id', auth, existDocMiddleware, upload.fields([{ name: 'passport', maxCount: 10 }, { name: 'inn', maxCount: 1 }]), docTypeBController.uploadScreens);

module.exports = router;
