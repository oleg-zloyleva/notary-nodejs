const docTypeHandlers = (modelName) => {
  const docType = require(`../models/${modelName}`);

  const findAll = async (req, res, next) => {
    try {
      const data = await docType.getAll(req);
      return res.json({ data });
    } catch (e) {
      return next(e);
    }
  };

  const findOne = async (req, res, next) => {
    try {
      const data = await docType.getOne(req);
      return res.json({ data });
    } catch (e) {
      return next(e);
    }
  };

  const createOne = async (req, res, next) => {
    try {
      const data = await docType.createOne(req);
      return res.json({ data });
    } catch (e) {
      return next(e);
    }
  };

  const uploadScreens = async (req, res, next) => {
    try {
      const document = await docType.uploadScreens(req);
      return res.json({
        data: document,
      });
    } catch (e) {
      return next(e);
    }
  };

  const removeScreen = async (req, res, next) => {
    try {
      const document = await docType.removeScreen(req);
      return res.json({
        data: document,
      });
    } catch (e) {
      return next(e);
    }
  };

  const sendToCheck = async (req, res, next) => {
    try {
      const data = await docType.sendToCheck(req);
      return res.json({ data });
    } catch (e) {
      return next(e);
    }
  };

  return {
    findAll,
    findOne,
    createOne,
    uploadScreens,
    removeScreen,
    sendToCheck,
  };
};

module.exports = docTypeHandlers;
