const User = require('../../models/users');

const getSMSForChangePhone = async (req, res, next) => {
  try {
    const data = await User.createSMSForChangePhone(req);
    return res.json({ data });
  } catch (e) {
    next(e);
  }
};

const changePhone = async (req, res, next) => {
  try {
    const data = await User.changePhone(req);
    return res.json({ data });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getSMSForChangePhone,
  changePhone,
};
