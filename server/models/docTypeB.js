const mongoose = require('mongoose');
const newSchema = require('../schemas/docTypeB');
const docProxyModelMethods = require('../helpers/docModelMethods');

newSchema.statics = {
  ...newSchema.statics,
  ...docProxyModelMethods,
};

module.exports = mongoose.model('docTypeB', newSchema);
