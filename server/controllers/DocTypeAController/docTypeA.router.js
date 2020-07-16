const router = require('express').Router();
const auth = require('../../middlewares/auth');
const existDocTypeAMiddleware = require('../../middlewares/existDocTypeAMiddleware');
const DocTypeAController = require('./docTypeA');
const upload = require('../../helpers/uploadScreens');

router.get('/', auth, DocTypeAController.findAll);
router.get('/:id', auth, DocTypeAController.findOne);
router.patch('/:id', auth, DocTypeAController.sendToCheck);
router.post('/', auth, DocTypeAController.createOne);
router.post('/:id', auth, existDocTypeAMiddleware, upload.fields([{ name: 'passport', maxCount: 10 }, { name: 'inn', maxCount: 1 }]), DocTypeAController.uploadScreens);

module.exports = router;
