const mongoose = require('mongoose');
const newSchema = require('../schemas/DocTypeA');
const docProxyModelMethods = require('../helpers/docModelMethods');

newSchema.statics = {
  ...newSchema.statics,
  ...docProxyModelMethods,
};

module.exports = mongoose.model('DocTypeA', newSchema);
