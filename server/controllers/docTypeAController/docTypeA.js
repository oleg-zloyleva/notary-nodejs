const docTypeA = require('../../models/docTypeA');

const findAll = async (req, res, next) => {
  try {
    const data = await docTypeA.getAll(req);
    return res.json({ data });
  } catch (e) {
    return next(e);
  }
};

const findOne = async (req, res, next) => {
  try {
    const data = await docTypeA.getOne(req);
    return res.json({ data });
  } catch (e) {
    return next(e);
  }
};

const createOne = async (req, res, next) => {
  try {
    const data = await docTypeA.createOne(req);
    return res.json({ data });
  } catch (e) {
    return next(e);
  }
};

const uploadScreens = async (req, res, next) => {
  try {
    const document = await docTypeA.uploadScreens(req);
    return res.json({
      data: document,
    });
  } catch (e) {
    return next(e);
  }
};

const sendToCheck = async (req, res, next) => {
  try {
    const data = await docTypeA.sendToCheck(req);
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
