'use strict';
const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Require field name']
  },
  last_name: {
    type: String
  },
  patronymic: {
    type: String
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
    required: [true, 'Require field password']
  },
  sms_code: {
    type: String,
  },
  phone_verified_at: {
    type: Date,
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
    type: Date,
  },
  idn: {
    type: String,
  },
  birth_day: {
    type: Date,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
const User = mongoose.model('User', newSchema);

module.exports = User;