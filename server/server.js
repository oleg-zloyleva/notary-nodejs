const express = require('express');
const app = express();
const config = require('./src/config/appSettings');

const db = require('./src/mongo');

db.connect('mongodb://mongo:27017/mongodb', err => {
    if (err) {
        console.log('Unable to connect to Mongo.');
        process.exit(1)
    } else {
        app.listen(config.port, () => {
            console.log(`App was started at ${config.port} port`);
        });
    }
});
