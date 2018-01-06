const Hapi = require('hapi');
const Good = require('good');
const HapiSwagger = require('hapi-swagger');
const Inert = require('inert');
const Vision = require('vision');
const config = require('../config');
const Pack = require('../package.json');
const route = require('./route');

const server = new Hapi.Server({
  debug: config.server.debug
});

server.connection({
  port: config.server.port
});

server.register([
  Inert,
  Vision,
  {
    register: HapiSwagger,
    options: {
      info: {
        title: 'Hapijs Boilerplate Documentation',
        description: 'Hapijs Boilerplate Documentation',
        version: Pack.version,
      },
      schemes: ['http'],
      host: `${config.server.host}:${config.server.port}`
    }
  },
  {
    register: Good,
    options: {
      reporters: {
        consoleReporter: [
          {
            module: 'good-console'
          }, 'stdout'],
      }
    }
  }
], (error) => {
  if (error) {
    throw error;
  }

  server.route(route);

  server.start((err) => {
    /* eslint-disable no-console */
    if (err) {
      console.error({ err }, 'Error occurred while starting server !!!');
    }
    console.log(`Server started at http://${config.server.host}:${config.server.port}`);
  });
});
