const mongoose = require('mongoose');
const newSchema = require('../schemas/docTypeA');
const docProxyModelMethods = require('../helpers/docModelMethods');

newSchema.statics = {
  ...newSchema.statics,
  ...docProxyModelMethods,
};

module.exports = mongoose.model('docTypeA', newSchema);
