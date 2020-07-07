const { MongoError } = require('mongodb');
const FormRequestError = require('../errors/formRequestError');
const CustomError = require('../errors/customError');

const FormRequestErrorMiddleware = (err,req,res,next) => {
    if (err instanceof FormRequestError) {
        console.log("FormRequestError >>>>>>>>>>>>>>\n", err);
        return res.status(err._statusCode).json({
            errors: err.array,
        });
    }
    next(err)
};

const CustomErrorMiddleware = (err,req,res,next) => {
    if (err instanceof CustomError) {
        console.log("CustomError >>>>>>>>>>>>>>\n", err);
        return res.status(err._statusCode).json({
            errors: [{status:err._statusCode,title:err.message,}]
        });
    }
    next(err)
};

const MongoErrorMiddleware = (err,req,res,next) => {
    if (err instanceof MongoError) {
        console.log("MongoError >>>>>>>>>>>>>>\n", err);
        return res.status(503).json({
            errors: [{status:503,title:err.message,}]
        });
    }
    next(err)
};

const GeneralErrorMiddleware = (err,req,res,next) => {
    console.log("General >>>>>>>>>>>>>>\n", err);
    return res.status(500).json({
        errors: [{status:500,title:err.message,}]
    });
};

module.exports = {
    FormRequestErrorMiddleware,
    CustomErrorMiddleware,
    MongoErrorMiddleware,
    GeneralErrorMiddleware,
};