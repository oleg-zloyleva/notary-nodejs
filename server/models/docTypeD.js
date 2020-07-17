const mongoose = require('mongoose');
const newSchema = require('../schemas/docTypeD');
const docProxyModelMethods = require('../helpers/docModelMethods');

newSchema.statics = {
  ...newSchema.statics,
  ...docProxyModelMethods,
};

module.exports = mongoose.model('docTypeD', newSchema);
