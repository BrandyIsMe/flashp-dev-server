'use strict';
const MongoDB = require('@pick-star/cli-mongodb');
const { mongoDbName, mongodbUrl } = require('../../config/db');

function mongo() {
  return new MongoDB(mongodbUrl, mongoDbName);
}

module.exports = mongo;
