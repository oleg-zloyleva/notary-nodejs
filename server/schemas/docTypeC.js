const mongoose = require('mongoose');
const docGeneralSchema = require('./DocGeneralSchema')(mongoose);

const schema = new mongoose.Schema({
  ...docGeneralSchema,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = schema;
