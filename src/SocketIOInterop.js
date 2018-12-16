// type sender = ClientMapper.serverEvent => unit;
// type broadcaster = sender;
// type receiver = ClientMapper.clientCommand => unit;
// type connectionHandler = (broadcaster, sender, receiver) => unit;

// let onConnection: (connectionHandler) => unit;
// let startServer: (int, connectionHandler) => unit;

const http = require('http');
const io = require('socket.io');

const httpServer = http.createServer((_, response) => response.end("Chat server is listening"));

const socketServer = io(httpServer); //, { wsEngine: 'ws', transports: ['websocket'] });

(event, args) => socketServer.emit(event, args);
const broadcast = (eventName, value) => socketServer.emit(eventName, value);

const startServer = connectionHandler => socketServer.on("connect", socket => {
  const send = (eventName, value) => socket.emit(eventName, value);
  const subscribeToEvent = (eventName, handler) => socket.on(eventName, handler);
  connectionHandler(broadcast, send, subscribeToEvent);
  httpServer.listen(process.env.PORT || 13000)
});

module.exports = {
  startServer
}