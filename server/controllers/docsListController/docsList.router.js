const router = require('express').Router();
const docsListController = require('./docsList');

router.get('/', docsListController.getAll);

module.exports = router;
