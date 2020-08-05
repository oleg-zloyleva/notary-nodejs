const middlewareWrapper = (docType) => {
  const DocModel = require('../models/docType');
  const CustomError = require('../errors/customError');

  const middlewareHandler = async (req, res, next) => {
    const document = await DocModel.findOne({ _id: req.params.id, docType });
    if (!document) next(new CustomError('Document not found', 404));
    req.document = document;
    next();
  };
  return middlewareHandler;
};

module.exports = middlewareWrapper;
