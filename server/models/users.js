'use strict';
const mongoose = require('mongoose');
const CustomError = require('../errors/customError');
const { Role } = require('../helpers/constants');
const {getToken,isPasswordCorrect} = require('../helpers/func');

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
    enum: Object.values(Role),
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

newSchema.statics.loginUserReturnToken = async function({phone, password}){
  const user = await this.findOne({phone});
  if (!user) throw new CustomError('User not found',404); // status 404
  if ( !isPasswordCorrect(password, user) ) throw new CustomError('Wrong phone or password',401); // status 401
  return getToken(user);
};

const User = mongoose.model('User', newSchema);

module.exports = User;
