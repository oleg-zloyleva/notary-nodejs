const express = require('express');
const app = express();
const config = require('./config/appSettings');

app.listen(config.port, () => {
    console.log(`App was started at ${config.port} port`);
});