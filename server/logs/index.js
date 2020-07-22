require('winston-mongodb');
const mongoose = require('mongoose');
const db = mongoose.connection;

const {
  createLogger, format, transports,
} = require('winston');
const {
  combine, timestamp, prettyPrint,
} = format;

const logger = createLogger({
  format: combine(
    timestamp(),
    // json({ space: 2 }),
    prettyPrint(),
  ),
  transports: [
    new transports.File({ filename: 'combined.log', dirname: 'logs' }),
  ],
});

const options = {
  level: 'info',
  db,
  // metaKey: 'meta',
};
logger.add(new transports.MongoDB(options));

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console());
}

module.exports = logger;
