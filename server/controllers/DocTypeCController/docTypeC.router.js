const router = require('express').Router();
const auth = require('../../middlewares/auth');
const existDocMiddleware = require('../../middlewares/existDocMiddleware')('DocTypeC');
const DocTypeCController = require('./docTypeC');
const upload = require('../../helpers/uploadScreens');

router.get('/', auth, DocTypeCController.findAll);
router.get('/:id', auth, DocTypeCController.findOne);
router.patch('/:id', auth, DocTypeCController.sendToCheck);
router.post('/', auth, DocTypeCController.createOne);
// todo upload.fields set to current doc
router.post('/:id', auth, existDocMiddleware, upload.fields([{ name: 'passport', maxCount: 10 }, { name: 'inn', maxCount: 1 }]), DocTypeCController.uploadScreens);

module.exports = router;
