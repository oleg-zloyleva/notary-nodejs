const DocTypeA = require('../../models/DocTypeA');

const findAll = async (req, res, next) => {
  try {
    const data = await DocTypeA.getAll(req);
    return res.json({ data });
  } catch (e) {
    next(e);
  }
};

const findOne = async (req, res, next) => {
  try {
    const data = await DocTypeA.getOne(req);
    return res.json({ data });
  } catch (e) {
    next(e);
  }
};

const createOne = async (req, res, next) => {
  try {
    const data = await DocTypeA.createOne(req);
    return res.json({ data });
  } catch (e) {
    next(e);
  }
};

const uploadScreens = async (req, res, next) => {
  try {
    const document = await DocTypeA.uploadScreens(req);
    return res.json({
      data: document,
    });
  } catch (e) {
    next(e);
  }
};

const sendToCheck = async (req, res, next) => {
  try {
    const data = await DocTypeA.sendToCheck(req);
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
