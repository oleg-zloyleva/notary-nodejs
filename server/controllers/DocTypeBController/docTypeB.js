const DocTypeB = require('../../models/DocTypeB');

const findAll = async (req, res, next) => {
  try {
    const data = await DocTypeB.getAll(req);
    return res.json({ data });
  } catch (e) {
    next(e);
  }
};

const findOne = async (req, res, next) => {
  try {
    const data = await DocTypeB.getOne(req);
    return res.json({ data });
  } catch (e) {
    next(e);
  }
};

const createOne = async (req, res, next) => {
  try {
    const data = await DocTypeB.createOne(req);
    return res.json({ data });
  } catch (e) {
    next(e);
  }
};

const uploadScreens = async (req, res, next) => {
  try {
    const document = await DocTypeB.uploadScreens(req);
    return res.json({
      data: document,
    });
  } catch (e) {
    next(e);
  }
};

const sendToCheck = async (req, res, next) => {
  try {
    const data = await DocTypeB.sendToCheck(req);
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
