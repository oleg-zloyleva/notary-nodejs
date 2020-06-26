'use strict';
const assert = require('assert').strict;

module.exports = {
  up: (models, mongoose) => {
    return new Promise((resolve, reject) => {
      resolve();
    })
  },

  down: (models, mongoose) => {
    return models.ScreenImage.remove({}, err => assert.equal(null,err));
  }
};
