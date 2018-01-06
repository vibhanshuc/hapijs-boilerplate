const route = [];

route.push({
  method: 'GET',
  path: '/hello',
  config: {
    tags: ['api'],
    description: 'Hello World',
    handler: (request, reply) => {
      reply('Hello Hapijs!');
    }
  }
});


module.exports = route;
