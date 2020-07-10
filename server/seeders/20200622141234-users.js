
const assert = require('assert').strict;
const bcrypt = require('bcrypt');
const config = require('../config/appSettings');
const { Role } = require('../helpers/constants');

module.exports = {
  up: (models) => models.User.bulkWrite([
    {
      insertOne: {
        document: {
          name: 'User',
          phone: '1234567890',
          password: bcrypt.hashSync('123456789', config.bcryptSalt),
          phone_verified_at: Date.now(),
          role: Role.USER,
        },
      },
    },
    {
      insertOne: {
        document: {
          name: 'Notary',
          phone: '1111111111',
          password: bcrypt.hashSync('123456789', config.bcryptSalt),
          phone_verified_at: Date.now(),
          role: Role.NOTARY,
        },
      },
    },
  ]).then((res) => {
    // Prints "1"
    console.log(res.insertedCount);
  }),

  down: (models) => models.User.remove({}, (err) => assert.equal(null, err)),
};
