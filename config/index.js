// Load config according to environment variable `NODE_ENV` set in system
const nodeEnv = process.env.NODE_ENV;

if (!nodeEnv) {
  throw Error('You forgot to set NODE_ENV environment variable');
}

require('dotenv').config({ path: `${nodeEnv}.env` });

/* eslint-disable import/no-dynamic-require */
const config = require(`./${nodeEnv}`);

module.exports = config;
