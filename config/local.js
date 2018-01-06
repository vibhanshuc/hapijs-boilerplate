module.exports = {
  name: 'Hapijs Boilerplate',
  server: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8080,
    debug: {
      log: ['error'],
      request: ['error']
    }
  }
};
