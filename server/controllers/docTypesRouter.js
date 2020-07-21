const foo = (modelName) => {
  const router = require('express').Router();
  const auth = require('../middlewares/auth');
  const existDocMiddleware = require('../middlewares/existDocMiddleware')(modelName);
  const docTypeController = require('./docTypesContoller')(modelName);
  const upload = require('../helpers/uploadScreens');

  router.get('/', auth, docTypeController.findAll);
  router.get('/:id', auth, docTypeController.findOne);
  router.patch('/:id', auth, docTypeController.sendToCheck);
  router.post('/', auth, docTypeController.createOne);

  router.post('/:id/screens', auth, existDocMiddleware, upload.fields([{ name: 'passport', maxCount: 10 }, { name: 'inn', maxCount: 1 }]), docTypeController.uploadScreens);
  router.delete('/:id/screens', auth, existDocMiddleware, docTypeController.removeScreen);

  return router;
};

module.exports = foo;
