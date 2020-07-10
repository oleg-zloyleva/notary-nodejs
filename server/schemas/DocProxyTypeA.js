
const mongoose = require('mongoose');
const ScreenImage = require('./ScreenImage');
const { Representative } = require('../helpers/constants');

const schema = new mongoose.Schema({
  representative: {
    type: String,
    enum: Object.values(Representative),
    required: true,
  },
  sendToCheck: Boolean,
  isReturnedToFix: Boolean,
  number: {
    type: String,
  },

  screens: [ScreenImage],

  sealId: {
    type: String,
  }, // 10 - печать юридического лица.

  user: { // relation to user
    type: mongoose.ObjectId,
    required: true,
  },
  access: [mongoose.ObjectId], // users who has access to doc and screens
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = schema;
