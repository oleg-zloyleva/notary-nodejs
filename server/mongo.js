const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const assert = require('assert').strict;
const config = require('./config/appSettings');

exports.run = () => {
  mongoose.connect(
    `mongodb://${config.db_user}:${config.db_pass}@${config.db_host}:27017`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: config.db_name,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  );

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', (err) => {
    assert.equal(undefined, err);
    console.log('Mongo DB was connected!'.bgCyan.yellow);
  });
};
