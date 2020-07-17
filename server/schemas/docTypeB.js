const mongoose = require('mongoose');
const { Representative } = require('../helpers/constants');

const schema = new mongoose.Schema({
  representative: {
    type: String,
    enum: Object.values(Representative),
    required: true,
  },
  sendToCheck: {
    type: Boolean,
    default: false,
  },
  isReturnedToFix: {
    type: Boolean,
    default: false,
  },
  number: {
    type: String,
  },

  screens: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ScreenImage' }],

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
