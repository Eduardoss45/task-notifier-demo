function init(server) {
  const { Server } = require('socket.io');
  const io = new Server(server, {
    cors: { origin: 'http://localhost:5500' },
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
  });
  return io;
}

module.exports = { init };
