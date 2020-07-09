const DocProxyTypeA = require('../models/DocProxyTypeA');
const CustomError = require('../errors/customError');

const middlewareHandler = async (req, res, next) => {
    const document = await DocProxyTypeA.findById(req.params.id);
    if (!document) next(new CustomError('Document not found', 404));
    req.document = document;
    next();
};

module.exports = middlewareHandler;