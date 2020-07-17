const router = require('express').Router();
const auth = require('../../middlewares/auth');
const existDocMiddleware = require('../../middlewares/existDocMiddleware')('docTypeC');
const docTypeCController = require('./docTypeC');
const upload = require('../../helpers/uploadScreens');

router.get('/', auth, docTypeCController.findAll);
router.get('/:id', auth, docTypeCController.findOne);
router.patch('/:id', auth, docTypeCController.sendToCheck);
router.post('/', auth, docTypeCController.createOne);
// todo upload.fields set to current doc
router.post('/:id', auth, existDocMiddleware, upload.fields([{ name: 'passport', maxCount: 10 }, { name: 'inn', maxCount: 1 }]), docTypeCController.uploadScreens);

module.exports = router;
