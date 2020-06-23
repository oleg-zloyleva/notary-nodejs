'use strict';
module.exports = mongoose => {
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
  const BlackList = mongoose.model('BlackList', newSchema);
  return BlackList;
};