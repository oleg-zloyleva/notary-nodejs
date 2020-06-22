'use strict';
const assert = require('assert').strict;
const bcrypt = require('bcrypt');

module.exports = {
  up: (models, mongoose) => {
    return models.User.bulkWrite([
      {
        insertOne: {
          document: {
            name: 'first test',
            password: bcrypt.hashSync('123456789',10),
          }
        }
      }
    ]).then(res => {
      // Prints "1"
      console.log(res.insertedCount);
    });
  },

  down: (models, mongoose) => {
    return models.User.remove({}, err =>assert.equal(null,err));
  }
};
