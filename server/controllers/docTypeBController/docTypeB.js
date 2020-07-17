const docTypeB = require('../../models/docTypeB');

const findAll = async (req, res, next) => {
  try {
    const data = await docTypeB.getAll(req);
    return res.json({ data });
  } catch (e) {
    return next(e);
  }
};

const findOne = async (req, res, next) => {
  try {
    const data = await docTypeB.getOne(req);
    return res.json({ data });
  } catch (e) {
    return next(e);
  }
};

const createOne = async (req, res, next) => {
  try {
    const data = await docTypeB.createOne(req);
    return res.json({ data });
  } catch (e) {
    return next(e);
  }
};

const uploadScreens = async (req, res, next) => {
  try {
    const document = await docTypeB.uploadScreens(req);
    return res.json({
      data: document,
    });
  } catch (e) {
    return next(e);
  }
};

const sendToCheck = async (req, res, next) => {
  try {
    const data = await docTypeB.sendToCheck(req);
    return res.json({ data });
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  findAll,
  findOne,
  createOne,
  uploadScreens,
  sendToCheck,
};
