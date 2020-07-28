const mongoose = require('mongoose');
const newSchema = require('../schemas/docTypeE');
const docProxyModelMethods = require('../helpers/docModelMethods');

newSchema.statics = {
  ...newSchema.statics,
  ...docProxyModelMethods,
};

module.exports = mongoose.model('docTypeE', newSchema);
