const mongoose = require('mongoose');
const { Representative, fieldTypes } = require('../helpers/constants');

const newSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
  },
  requirements: {
    type: String,
    enum: Object.values(Representative),
    required: true,
  },
  type: {
    type: String,
    enum: Object.values(fieldTypes),
    required: true,
  },
});

module.exports = mongoose.model('fieldType', newSchema);
