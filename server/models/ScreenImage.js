
const mongoose = require('mongoose');
const newSchema = require('../schemas/ScreenImage');

module.exports = mongoose.model('ScreenImage', newSchema);
