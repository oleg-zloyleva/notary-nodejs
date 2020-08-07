const mongoose = require('mongoose');
const { Representative } = require('../helpers/constants');
const { docTypes } = require('../helpers/constants');

const schema = new mongoose.Schema({
  representative: {
    type: String,
    enum: Object.values(Representative),
    required: true,
  },
  docType: {
    type: String,
    enum: Object.values(docTypes),
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
  // doc own number and series
  ownNumber: {
    type: String,
  },

  screens: [ // values
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ScreenImage',
    },
  ],

  textFields: { // values
    type: Map,
    of: String,
  },

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
