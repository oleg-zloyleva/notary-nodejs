const BlackList = require('../../models/blacklist');
const User = require('../../models/users');

const changePassword = async (req, res, next) => {
  try {
    await User.changePassword(req);
    await BlackList.invalidateToken(req);
    return res.json({
      data: 'Password was changed. User is logout',
    });
  } catch (e) {
    return next(e);
  }
};

const getSMSForResetPassword = async (req, res, next) => {
  try {
    const data = await User.createSMSForResetPassword(req.body);
    return res.json({ data });
  } catch (e) {
    return next(e);
  }
};

const resetPassword = async (req, res, next) => {
  try {
    const token = await User.resetPassword(req.body);
    return res.json({ token });
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  changePassword,
  getSMSForResetPassword,
  resetPassword,
};
