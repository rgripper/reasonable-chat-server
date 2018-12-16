/*type sender = ClientMapper.serverEvent => unit;*/
type sender = string => unit;
type broadcaster = sender;
/* type clientEventHandler = ClientMapper.clientCommand => unit; */
type clientEventHandler = ClientMapper.clientCommand => unit;
type clientEventSubscriber = (string, clientEventHandler) => unit;
type connectionHandler = (broadcaster, sender, clientEventSubscriber) => unit;

/* [@bs.deriving abstract]
type message = {
  id: int,
  creationDate: float,
  senderId: int,
  text: string,
};

[@bs.deriving abstract]
type user = {
  id: int,
  name: string,
  [@bs.optional] avatarUrl: string,
  isAvailable: bool,
  isTyping: bool,
};

[@bs.deriving abstract]
type chatState = {
  users: array(user),
  messages: array(message),
}; */

let encodeMessage = (message: ChatData.message) => Json.Encode.(object_([
  ("id", int(message.id)),
  ("senderId", int(message.senderId)),
  ("text", string(message.text)),
  ("creationDate", string(Js.Date.toISOString(Js.Date.fromFloat(message.creationDate)))),
]));

let encodeUser = (user: ChatData.user) => Json.Encode.(object_([
  ("id", int(user.id)),
  ("name", string(user.name)),
  ("avatarUrl", nullable(string, user.avatarUrl)),
  ("isAvailable", bool(user.isAvailable)),
  ("isTyping", bool(user.isTyping)),
]));

let encodeChatState = (chatState: ChatData.chatState) => Json.Encode.(object_([
  ("users", list(encodeUser, chatState.users)),
  ("messages", list(encodeMessage, chatState.messages)),
]));

[@bs.module "SocketIOInterop"]
external startServer: connectionHandler => unit = "startServer";