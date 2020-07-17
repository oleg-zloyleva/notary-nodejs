const router = require('express').Router();
const auth = require('../../middlewares/auth');
const existDocMiddleware = require('../../middlewares/existDocMiddleware')('DocTypeB');
const DocTypeBController = require('./docTypeB');
const upload = require('../../helpers/uploadScreens');

router.get('/', auth, DocTypeBController.findAll);
router.get('/:id', auth, DocTypeBController.findOne);
router.patch('/:id', auth, DocTypeBController.sendToCheck);
router.post('/', auth, DocTypeBController.createOne);
// todo upload.fields set to current doc
router.post('/:id', auth, existDocMiddleware, upload.fields([{ name: 'passport', maxCount: 10 }, { name: 'inn', maxCount: 1 }]), DocTypeBController.uploadScreens);

module.exports = router;
