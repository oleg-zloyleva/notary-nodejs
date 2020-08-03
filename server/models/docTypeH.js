const mongoose = require('mongoose');
const newSchema = require('../schemas/docTypeH');
const docProxyModelMethods = require('../helpers/docModelMethods');

newSchema.statics = {
  ...newSchema.statics,
  ...docProxyModelMethods,
};

module.exports = mongoose.model('docTypeH', newSchema);
