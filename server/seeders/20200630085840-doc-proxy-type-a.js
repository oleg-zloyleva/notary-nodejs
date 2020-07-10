
const assert = require('assert').strict;

module.exports = {
  up: (models, mongoose) => new Promise((resolve, reject) => {
    resolve();
  }),

  down: (models, mongoose) => models.DocProxyTypeA.remove({}, (err) => assert.equal(null, err)),
};
