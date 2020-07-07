'use strict';
const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

newSchema.statics.invalidateToken = async function({token,tokenData}){
  await this.create({
    token: token,
    expiresAt: tokenData.exp * 1000,
  });
};

module.exports = mongoose.model('BlackList', newSchema);
