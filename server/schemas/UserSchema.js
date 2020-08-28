
const mongoose = require('mongoose');
const { Role } = require('../helpers/constants');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Require field name'],
  },
  last_name: {
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
  sms_code: {
    type: String,
  },
  phone_verified_at: {
    type: Number,
  },
  passport_series: {
    type: String,
  },
  passport_number: {
    type: String,
  },
  passport_issued: {
    type: String,
  },
  passport_issued_date: {
    type: Number,
  },

  passport_screens: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ScreenImage',
    },
  ],

  idn: {
    type: String,
  },

  idn_screens: [
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
  fill_profile: {
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
