
const mongoose = require('mongoose');
const { DocProxyTypeATypes } = require('../helpers/constants');

const Schema = new mongoose.Schema({
  type: {
    type: String,
    enum: {
      values: Object.values(DocProxyTypeATypes.list),
      message: 'Invalid Type field value',
    },
    required: [true, 'type is required field'],
  },
  destination: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },

  access: {
    type: [mongoose.ObjectId],
  },

  isReturnedToFix: {
    type: Boolean,
    default: false,
  },
  isApprove: {
    type: Boolean,
    default: false,
  },
  fixItDescription: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = Schema;
