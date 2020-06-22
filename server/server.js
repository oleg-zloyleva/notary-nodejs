const colors = require('colors');
const express = require('express');

const app = express();
const config = require('./config/appSettings');

/** DB connection */
const mongo = require('./mongo');
mongo.run();

/** Middleware */

/** Routers */
app.use(require('./controllers'));

app.listen(config.port, () => {
    console.log(`App was started at ${config.port} port. And connected to Mongo`.white.bgCyan);
});