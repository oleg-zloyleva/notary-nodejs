
const assert = require('assert').strict;

module.exports = {
  up: (models) => models.BlackList.bulkWrite([
    {
      insertOne: {
        document: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjAxMjM0NTY3NDc3IiwiaWF0IjoxNTkyOTg4MzIwLCJleHAiOjE1OTM1ODgzMjB9.YSO6_oQPIlC2FU34EpA8klPpPvLnwfpL8QbIIqMGk7c',
          expiresAt: 1593588320 * 1000,
        },
      },
    },
  ]).then((res) => {
    // Prints "1"
    console.log(res.insertedCount);
  }),

  down: (models) => models.BlackList.remove({}, (err) => assert.equal(null, err)),
};
