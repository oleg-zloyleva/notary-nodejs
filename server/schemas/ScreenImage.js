'use strict';
const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  destination: {
    type: String
  },
  filename: {
    type: String
  },
  path: {
    type: String
  },
  access: {
    type: [mongoose.ObjectId]
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = Schema;
