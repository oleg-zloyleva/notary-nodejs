const mongoose = require('mongoose');
const newSchema = require('../schemas/docTypeC');
const docProxyModelMethods = require('../helpers/docModelMethods');

newSchema.statics = {
  ...newSchema.statics,
  ...docProxyModelMethods,
};

module.exports = mongoose.model('docTypeС', newSchema);
