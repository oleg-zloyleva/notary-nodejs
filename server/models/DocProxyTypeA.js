'use strict';
const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
  number: {
    type: String
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
module.exports = mongoose.model('DocProxyTypeA', newSchema);
