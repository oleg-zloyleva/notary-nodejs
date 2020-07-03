'use strict';
const mongoose = require('mongoose');
const CustomError = require('../errors/customError');
const { Role } = require('../helpers/constants');
const {getToken,getNewPassword,getSMSCode,isPasswordCorrect} = require('../helpers/func');

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

newSchema.statics.activateUsersBySMS = async function({sms_code}){
  const user = await this.findOneAndUpdate(
      {
        sms_code,
        phone_verified_at: {
          $exists: false
        }
      },
      {
        phone_verified_at: Date.now(),
        sms_code: null,
      }
  );

  if (!user) throw new CustomError('User for activation is not found',404);
  return getToken(user);
};

newSchema.statics.registerNewUser = async function ({name,password,phone}) {
  await this.init();
  // todo update with upsert = true, filter: phone and phone_verified_at => $exists: false
  const newUser = await this.create({
    name: name,
    password: getNewPassword(password),
    phone: phone,
    sms_code: getSMSCode(),
  });

  return process.env.NODE_ENV === 'development' ? newUser : true; // todo remove after
};

const User = mongoose.model('User', newSchema);

module.exports = User;
