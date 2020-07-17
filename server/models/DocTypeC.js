const mongoose = require('mongoose');
const newSchema = require('../schemas/DocTypeC');
const docProxyModelMethods = require('../helpers/docModelMethods');

newSchema.statics = {
  ...newSchema.statics,
  ...docProxyModelMethods,
};

module.exports = mongoose.model('DocTypeС', newSchema);
