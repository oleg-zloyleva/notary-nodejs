const middlewareWrapper = (modelName) => {
  const DocModel = require(`../models/${modelName}`);
  const CustomError = require('../errors/customError');

  const middlewareHandler = async (req, res, next) => {
    const document = await DocModel.findById(req.params.id);
    if (!document) next(new CustomError('Document not found', 404));
    req.document = document;
    next();
  };
  return middlewareHandler;
};

module.exports = middlewareWrapper;
