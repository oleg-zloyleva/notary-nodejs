
const mongoose = require('mongoose');
const CustomError = require('../errors/customError');
const {
  getToken, getNewPassword, getSMSCode, isPasswordCorrect,
} = require('../helpers/func');
const newSchema = require('../schemas/UserSchema');

newSchema.statics.loginUserReturnToken = async function ({ phone, password }) {
  const user = await this.findOne({ phone });
  if (!user) throw new CustomError(`User with phone:${phone} not found`, 404, { phone }); // status 404
  if (!isPasswordCorrect(password, user.password)) throw new CustomError('Wrong phone or password', 401, { phone }); // status 401
  return {
    token: getToken(user),
    user: user.toJSON(),
  };
};

newSchema.statics.activateUsersBySMS = async function ({ sms_code }) {
  const user = await this.findOneAndUpdate(
    {
      sms_code,
      phone_verified_at: {
        $exists: false,
      },
    },
    {
      phone_verified_at: Date.now(),
      sms_code: null,
    },
    {
      new: true,
    },
  );

  if (!user) throw new CustomError('User for activation is not found', 404);
  return {
    token: getToken(user),
    user,
  };
};

newSchema.statics.registerNewUser = async function ({ name, password, phone }) {
  await this.init();
  // todo update with upsert = true, filter: phone and phone_verified_at => $exists: false
  const newUser = await this.create({
    name,
    password: getNewPassword(password),
    phone,
    sms_code: getSMSCode(),
  });

  return process.env.NODE_ENV === 'development' ? newUser : true; // todo remove after
};

newSchema.statics.createSMSForResetPassword = async function ({ phone }) {
  const user = await this.findOneAndUpdate(
    {
      phone,
      phone_verified_at: {
        $exists: true,
      },
    },
    {
      sms_code: getSMSCode(),
    },
    {
      new: true,
    },
  );
  // todo send SMS
  if (!user) throw new CustomError('User not found', 404);

  return process.env.NODE_ENV === 'development' ? user : true; // todo remove after
};

newSchema.statics.resetPassword = async function ({ sms_code, password }) {
  const user = await this.findOneAndUpdate(
    {
      sms_code,
      phone_verified_at: {
        $exists: true,
      },
    },
    {
      password: getNewPassword(password),
      sms_code: null,
    },
    {
      new: true,
    },
  );
  if (!user) throw new CustomError('User not found', 404);

  return {
    token: getToken(user),
    user,
  };
};

newSchema.statics.changePassword = async function ({ user, body: { password } }) {
  await this.findOneAndUpdate(
    { _id: user._id },
    { password: getNewPassword(password) },
    { new: true },
  );
};

newSchema.statics.createSMSForChangePhone = async function ({
  body: { new_phone }, user: { _id },
}) {
  const user = await this.findOneAndUpdate(
    {
      _id,
      phone_verified_at: {
        $exists: true,
      },
    },
    {
      sms_code: getSMSCode(),
      new_phone,
    },
    {
      new: true,
    },
  );
  // todo send SMS to new_phone
  if (!user) throw new CustomError('User not found', 404);

  return process.env.NODE_ENV === 'development' ? user : true; // todo remove after
};

newSchema.statics.changePhone = async function ({ user, body: { sms_code } }) {
  // eslint-disable-next-line camelcase
  if (user.sms_code === sms_code) {
    const data = await this.findOneAndUpdate(
      { _id: user._id },
      {
        phone: user.new_phone,
        new_phone: null,
        sms_code: null,
      },
      { new: true },
    );
    return process.env.NODE_ENV === 'development' ? data : true; // todo remove after
  }
  throw new CustomError('User not fount', 404);
};

newSchema.statics.updateMyProfile = async function (
  {
    user,
    body: {
      name,
      last_name,
      patronymic,
      passport_series,
      passport_number,
      passport_issued,
      passport_issued_date,
      idn,
      birth_day,
    },
  },
) {
  const data = await this.findOneAndUpdate(
    { _id: user._id },
    {
      name,
      last_name,
      patronymic,
      passport_series,
      passport_number,
      passport_issued,
      passport_issued_date,
      idn,
      birth_day,
    },
    { new: true },
  );
  return data;
};

const User = mongoose.model('User', newSchema);

module.exports = User;
