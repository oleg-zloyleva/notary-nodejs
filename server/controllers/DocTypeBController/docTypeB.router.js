const router = require('express').Router();
const auth = require('../../middlewares/auth');
const existDocTypeAMiddleware = require('../../middlewares/existDocTypeAMiddleware');
const DocTypeBController = require('./docTypeB');
const upload = require('../../helpers/uploadScreens');

router.get('/', auth, DocTypeBController.findAll);
router.get('/:id', auth, DocTypeBController.findOne);
router.patch('/:id', auth, DocTypeBController.sendToCheck);
router.post('/', auth, DocTypeBController.createOne);
router.post('/:id', auth, existDocTypeAMiddleware, upload.fields([{ name: 'passport', maxCount: 10 }, { name: 'inn', maxCount: 1 }]), DocTypeBController.uploadScreens);

module.exports = router;
