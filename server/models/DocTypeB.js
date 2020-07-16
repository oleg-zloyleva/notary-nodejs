
const mongoose = require('mongoose');
const newSchema = require('../schemas/DocTypeB');
const docProxyModelMethods = require('../helpers/docModelMethods');

newSchema.statics = {
  ...newSchema.statics,
  ...docProxyModelMethods,
};

module.exports = mongoose.model('DocTypeB', newSchema);
