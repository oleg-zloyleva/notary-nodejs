'use strict';
const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
  url: {
    type: String
  },
  check: {
    type: Boolean
  },
  owner: { // relation to user
    type: ObjectId
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
module.exports = newSchema;
