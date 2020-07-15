
const mongoose = require('mongoose');
const newSchema = require('../schemas/DocProxyTypeB');


module.exports = mongoose.model('DocProxyTypeB', newSchema);
