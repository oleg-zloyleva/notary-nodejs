const config = require('./appSettings');

module.exports = {
  development: {
    database: {
      protocol: 'mongodb',
      username: config.db_user,
      password: config.db_pass,
      name: config.db_name,
      host: 'mongo',
      port: '27017',
      config: {
        dbName: config.db_name,
      },
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: config.db_name,
        useCreateIndex: true,
      },
    },
  },
};
