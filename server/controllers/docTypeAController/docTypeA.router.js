const router = require('express').Router();
const auth = require('../../middlewares/auth');
const existDocMiddleware = require('../../middlewares/existDocMiddleware')('docTypeA');
const docTypeAController = require('./docTypeA');
const upload = require('../../helpers/uploadScreens');

router.get('/', auth, docTypeAController.findAll);
router.get('/:id', auth, docTypeAController.findOne);
router.patch('/:id', auth, docTypeAController.sendToCheck);
router.post('/', auth, docTypeAController.createOne);
// todo upload.fields set to current doc
router.post('/:id', auth, existDocMiddleware, upload.fields([{ name: 'passport', maxCount: 10 }, { name: 'inn', maxCount: 1 }]), docTypeAController.uploadScreens);

module.exports = router;
