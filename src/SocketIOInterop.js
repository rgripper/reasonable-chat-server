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

const startServer = (eventNames, handler) => socketServer.on("connect", socket => {
  const send = (eventName, value) => socket.emit(eventName, value);
  let socketState = undefined;
  
  eventNames.forEach(eventName => socket.on(eventName, data => 
    // cycle of updating socket state
    socketState = handler(socketState, eventName, data, send, broadcast)));

  httpServer.listen(process.env.PORT || 13000);
});

module.exports = {
  startServer
}