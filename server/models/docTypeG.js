const mongoose = require('mongoose');
const newSchema = require('../schemas/docTypeG');
const docProxyModelMethods = require('../helpers/docModelMethods');

newSchema.statics = {
  ...newSchema.statics,
  ...docProxyModelMethods,
};

module.exports = mongoose.model('docTypeG', newSchema);
