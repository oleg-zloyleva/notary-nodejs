const routerHandler = (docType) => {
  const router = require('express').Router();
  const auth = require('../middlewares/auth');
  const existDocMiddleware = require('../middlewares/existDocMiddleware')(docType);
  const docTypeController = require('./docTypesControllerClass')(docType);
  const upload = require('../helpers/uploadScreens');

  router.get('/', auth, docTypeController.getAllItems);
  router.get('/create', auth, docTypeController.getCreateData);
  router.get('/:id', auth, docTypeController.findOneItem);
  router.patch('/:id', auth, docTypeController.sendToCheckItem);
  router.post('/', auth, docTypeController.createOneItem);

  router.post('/:id/screens', auth, existDocMiddleware, upload.fields([{ name: 'passport', maxCount: 10 }, { name: 'inn', maxCount: 1 }]), docTypeController.uploadScreensForItem);
  router.delete('/:id/screens', auth, existDocMiddleware, docTypeController.removeScreenForItem);

  return router;
};

module.exports = routerHandler;
