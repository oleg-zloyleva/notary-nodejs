const docTypeD = require('../../models/docTypeD');

const findAll = async (req, res, next) => {
  try {
    const data = await docTypeD.getAll(req);
    return res.json({ data });
  } catch (e) {
    next(e);
  }
};

const findOne = async (req, res, next) => {
  try {
    const data = await docTypeD.getOne(req);
    return res.json({ data });
  } catch (e) {
    next(e);
  }
};

const createOne = async (req, res, next) => {
  try {
    const data = await docTypeD.createOne(req);
    return res.json({ data });
  } catch (e) {
    next(e);
  }
};

const uploadScreens = async (req, res, next) => {
  try {
    const document = await docTypeD.uploadScreens(req);
    return res.json({
      data: document,
    });
  } catch (e) {
    next(e);
  }
};

const sendToCheck = async (req, res, next) => {
  try {
    const data = await docTypeD.sendToCheck(req);
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
