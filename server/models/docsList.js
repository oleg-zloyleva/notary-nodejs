const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
  docType: {
    type: String,
    required: true,
  },
  fieldsTypes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'fieldsType',
    },
  ],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = mongoose.model('docsList', newSchema);
