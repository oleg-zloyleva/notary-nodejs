'use strict';
const mongoose = require('mongoose');
const ScreenImage = require('../schemas/ScreenImage');

const newSchema = new mongoose.Schema({
  number: {
    type: String
  },
  passport: [ScreenImage],
  inn: [ScreenImage],
  user: { // relation to user
    type: ObjectId
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
module.exports = mongoose.model('DocProxyTypeA', newSchema);
