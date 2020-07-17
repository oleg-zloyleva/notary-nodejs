const { Representative } = require('../helpers/constants');

const rootSchema = (mongoose) => ({
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
  // doc own number and series
  ownNumber: {
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
});

module.exports = rootSchema;
