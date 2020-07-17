const docTypeC = require('../../models/docTypeC');

const findAll = async (req, res, next) => {
  try {
    const data = await docTypeC.getAll(req);
    return res.json({ data });
  } catch (e) {
    next(e);
  }
};

const findOne = async (req, res, next) => {
  try {
    const data = await docTypeC.getOne(req);
    return res.json({ data });
  } catch (e) {
    next(e);
  }
};

const createOne = async (req, res, next) => {
  try {
    const data = await docTypeC.createOne(req);
    return res.json({ data });
  } catch (e) {
    next(e);
  }
};

const uploadScreens = async (req, res, next) => {
  try {
    const document = await docTypeC.uploadScreens(req);
    return res.json({
      data: document,
    });
  } catch (e) {
    next(e);
  }
};

const sendToCheck = async (req, res, next) => {
  try {
    const data = await docTypeC.sendToCheck(req);
    return res.json({ data });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  findAll,
  findOne,
  createOne,
  uploadScreens,
  sendToCheck,
};
