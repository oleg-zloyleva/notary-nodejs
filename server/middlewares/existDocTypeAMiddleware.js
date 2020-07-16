const DocTypeA = require('../models/DocTypeA');
const CustomError = require('../errors/customError');

const middlewareHandler = async (req, res, next) => {
  const document = await DocTypeA.findById(req.params.id);
  if (!document) next(new CustomError('Document not found', 404));
  req.document = document;
  next();
};

module.exports = middlewareHandler;
