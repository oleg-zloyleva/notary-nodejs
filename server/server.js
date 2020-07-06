const colors = require('colors');
const express = require('express');
const { MongoError } = require('mongodb');

const app = express();
const config = require('./config/appSettings');

const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const FormRequestError = require('./errors/formRequestError');
const CustomError = require('./errors/customError');

/** DB connection */
const mongo = require('./mongo');
mongo.run();

/** Middleware */
app.use(express.json());

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'REST API for notary service',
        version: '1.0.0',
        description: 'This is the REST API for notary service',
    },
    components: {
        securitySchemes: {
            BearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            }
        },
    },
};

// options for the swagger docs
const options = {
    // import swaggerDefinitions
    swaggerDefinition,
    // path to the API docs
    apis: ['./swagger/**/*.yaml'],
};
// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);
const swaggerSetup = {
    ...swaggerSpec,
    servers: [
        {url: '/api'}
    ]
};
app.use(`${config.apiPrefix}/doc`, swaggerUi.serve, swaggerUi.setup(swaggerSetup));

/** Routers */
app.use(require('./controllers'));

app.use((err,req,res,next) => {
    if (err instanceof FormRequestError) {
        console.log("FormRequestError >>>>>>>>>>>>>>\n", err);
        return res.status(err._statusCode).json({
            errors: err.array,
        });
    }
    next(err)
});

app.use((err,req,res,next) => {
    if (err instanceof CustomError) {
        console.log("CustomError >>>>>>>>>>>>>>\n", err);
        return res.status(err._statusCode).json({
            errors: [{status:err._statusCode,title:err.message,}]
        });
    }
    next(err)
});

app.use((err,req,res,next) => {
    if (err instanceof MongoError) {
        console.log("MongoError >>>>>>>>>>>>>>\n", err);
        return res.status(503).json({
            errors: [{status:503,title:err.message,}]
        });
    }
    next(err)
});

app.use((err,req,res,next) => {
    console.log("General >>>>>>>>>>>>>>\n", err);
    return res.status(500).json({
        errors: [{status:500,title:err.message,}]
    });
});

app.listen(config.port, () => {
    console.log(`App was started at ${config.port} port. And connected to Mongo`.white.bgCyan);
});