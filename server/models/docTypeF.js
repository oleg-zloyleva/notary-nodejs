const mongoose = require('mongoose');
const newSchema = require('../schemas/docTypeF');
const docProxyModelMethods = require('../helpers/docModelMethods');

newSchema.statics = {
  ...newSchema.statics,
  ...docProxyModelMethods,
};

module.exports = mongoose.model('docTypeF', newSchema);
