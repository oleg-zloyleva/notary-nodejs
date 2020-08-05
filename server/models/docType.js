const mongoose = require('mongoose');
const newSchema = require('../schemas/docType');
const docProxyModelMethods = require('../helpers/docModelMethods');

newSchema.statics = {
  ...newSchema.statics,
  ...docProxyModelMethods,
};

module.exports = mongoose.model('docType', newSchema);
