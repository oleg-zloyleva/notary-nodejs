const router = require('express').Router();
const auth = require('../../middlewares/auth');
const existDocTypeAMiddleware = require('../../middlewares/existDocTypeAMiddleware');
const DocProxyTypeAController = require('./docProxyTypeA');
const upload = require('../../helpers/uploadScreens');

router.get('/', auth, DocProxyTypeAController.findAll);
router.get('/:id', auth, DocProxyTypeAController.findOne);
router.patch('/:id', auth, DocProxyTypeAController.sendToCheck);
router.post('/', auth, DocProxyTypeAController.createOne);
router.post('/:id', auth, existDocTypeAMiddleware, upload.fields([{ name: 'passport', maxCount: 10 }, { name: 'inn', maxCount: 1 }]), DocProxyTypeAController.uploadScreens);

module.exports = router;
