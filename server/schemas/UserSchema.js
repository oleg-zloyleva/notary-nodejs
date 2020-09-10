
const mongoose = require('mongoose');
const { Role } = require('../helpers/constants');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Require field name'],
  },
  lastName: {
    type: String,
  },
  patronymic: {
    type: String,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    sparse: true,
    trim: true,
  },
  phone: {
    type: String,
    unique: true,
    sparse: true,
    trim: true,
  },
  new_phone: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'Require field password'],
  },
  smsCode: {
    type: String,
  },
  phone_verified_at: {
    type: Number,
  },
  passportSeries: {
    type: String,
  },
  passportNumber: {
    type: String,
  },
  passportIssued: {
    type: String,
  },
  passportIssuedDate: {
    type: Number,
  },

  passportScreens: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ScreenImage',
    },
  ],

  inn: {
    type: String,
  },

  inn_screens: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ScreenImage',
    },
  ],

  birth_day: {
    type: Number,
  },
  role: {
    type: String,
    enum: Object.values(Role),
  },
  fillProfile: {
    type: Boolean,
    default: false,
  },
  createdAt: Number,
  updatedAt: Number,
}, {
  timestamps: {
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    currentTime: () => Math.floor(Date.now() / 1000),
  },
});

module.exports = schema;
