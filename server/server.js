const colors = require('colors');
const express = require('express');

const app = express();
const config = require('./config/appSettings');

const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const ErrorMiddleWare = require('./middlewares/ErrorMiddlewares');

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

app.use(ErrorMiddleWare.FormRequestErrorMiddleware);
app.use(ErrorMiddleWare.CustomErrorMiddleware);
app.use(ErrorMiddleWare.MongoErrorMiddleware);
app.use(ErrorMiddleWare.GeneralErrorMiddleware);

app.listen(config.port, () => {
    console.log(`App was started at ${config.port} port. And connected to Mongo`.white.bgCyan);
});