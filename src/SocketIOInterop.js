const http = require('http');
const io = require('socket.io');

const httpServer = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Chat server is listening");
});

const socketServer = io(httpServer, { wsEngine: 'ws', transports: ['websocket'] });

export const startServer = (clientEventNames, serverEventName, initialSocketState, handler) => {
  const broadcast = (value) => socketServer.emit(serverEventName, value);
  socketServer.on("connect", socket => {
    console.log(`Event: connect; socket: ${socket.id}`);
    const send = (value) => socket.emit(serverEventName, value);
    let socketState = initialSocketState;

    clientEventNames.forEach(eventName => socket.on(eventName, data => {
      console.log(`Event: ${eventName}; data: ${JSON.stringify(data)}`);
      // cycle of updating socket state
      socketState = handler(socketState, eventName, data, send, broadcast);
    }));
  });
  console.log('Starting server');
  httpServer.listen(process.env.PORT || 35558);
  console.log('Server is listening on ', httpServer.address());
}