const { MongoError } = require('mongodb');
const FormRequestError = require('../errors/formRequestError');
const CustomError = require('../errors/customError');
const logger = require('../logs');

const FormRequestErrorMiddleware = (err, req, res, next) => {
  if (err instanceof FormRequestError) {
    console.log('FormRequestError >>>>>>>>>>>>>>\n', err);
    logger.log('error', 'FormRequestError', { metadata: { stack: err.stack, data: err.array } });
    return res.status(err._statusCode).json({
      errors: err.array,
    });
  }
  next(err);
};

const CustomErrorMiddleware = (err, req, res, next) => {
  if (err instanceof CustomError) {
    console.log('CustomError >>>>>>>>>>>>>>\n', err);
    logger.log('error', err.message, { metadata: { stack: err.stack, data: err.data } });
    return res.status(err._statusCode).json({
      errors: [{ status: err._statusCode, title: err.message }],
    });
  }
  next(err);
};

const MongoErrorMiddleware = (err, req, res, next) => {
  if (err instanceof MongoError) {
    console.log('MongoError >>>>>>>>>>>>>>\n', err);
    logger.log('error', err.message, { metadata: { stack: err.stack, data: err.data } });
    return res.status(503).json({
      errors: [{ status: 503, title: err.message }],
    });
  }
  next(err);
};

// eslint-disable-next-line no-unused-vars
const GeneralErrorMiddleware = (err, req, res, next) => {
  console.log('General >>>>>>>>>>>>>>\n', err);
  logger.log('error', err.message, { metadata: { stack: err.stack, data: err.data } });
  return res.status(500).json({
    errors: [{ status: 500, title: err.message }],
  });
};

module.exports = {
  FormRequestErrorMiddleware,
  CustomErrorMiddleware,
  MongoErrorMiddleware,
  GeneralErrorMiddleware,
};
