
const assert = require('assert').strict;

module.exports = {
  up: () => new Promise((resolve) => {
    resolve();
  }),

  down: (models) => models.docTypeС.remove({}, (err) => assert.equal(null, err)),
};
