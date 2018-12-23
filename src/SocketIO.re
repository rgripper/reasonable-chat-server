/*type sender = ClientMapper.serverEvent => unit;*/
type sender('a) = 'a => unit;
type broadcaster('a) = sender('a);
/* type clientEventHandler = ClientMapper.clientCommand => unit; */
type clientCommandHandler('a) = ServerTypes.clientCommand => unit;
type clientCommandSubscriber('a) = (string, clientCommandHandler('a)) => unit;
type connectionHandler('a, 'b) = (broadcaster('a), sender('a), clientCommandSubscriber('b)) => unit;

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
  ("creationDate", Js.Date.(message.creationDate -> fromFloat -> toISOString -> string)),
]));

let encodeUser = (user: ChatData.user) => Json.Encode.(object_([
  ("id", int(user.id)),
  ("name", string(user.name)),
  ("avatarUrl", nullable(string, user.avatarUrl)),
  ("isAvailable", bool(user.isAvailable)),
  ("isTyping", bool(user.isTyping)),
]));

let encodeChatState = (chatState: ChatData.chatState, userId: int) => Json.Encode.(object_([
  ("users", list(encodeUser, chatState.users)),
  ("messages", list(encodeMessage, chatState.messages)),
  ("currentUserId", int(userId)),
]));

/* TODO */
let encodeServerEvent = (serverEvent: ServerTypes.serverEvent): Js.Json.t => Json.Encode.(ServerTypes.(switch (serverEvent) {
  | LoginSuccessful(x, userId) => object_([ 
    ("type", int(3)),
    ("chat", encodeChatState(x, userId))
    ])
  | UserAvailable(x) => object_([ 
    ("type", int(1)),
    ("user", encodeUser(x))
    ])
  | UserUnavailable(x) => object_([ 
    ("type", int(0)),
    ("userId", int(x.id))
    ])
  | MessagePublished(x) => object_([ 
    ("type", int(2)),
    ("message", encodeMessage(x))
    ])
}));

let decodeClientCommand = (json: Js.Json.t): ServerTypes.clientCommand => Json.Decode.(switch (json |> field("type", int)) {
  | 0 => Login(json |> field("userName", string))
  | 1 => Logout
  | 2 => PublishMessage(json |> field("text", string))
  | _ => Logout /* TODO */
});

[@bs.module "SocketIOInterop"]
external js_startServer: connectionHandler(Js.Json.t, Js.Json.t) => unit = "startServer";

let startServer = ServerTypes.((handler: connectionHandler(serverEvent, clientCommand)) =>
  js_startServer((broadcaster, sender, clientCommandSubscriber: clientCommandSubscriber(Js.Json.t)) => handler(
    (serverEvent: serverEvent) => broadcaster(encodeServerEvent(serverEvent)), 
    (serverEvent: serverEvent) => sender(encodeServerEvent(serverEvent)),
    (eventName: string, clientCommandHandler) => clientCommandSubscriber(eventName, (json) => clientCommandHandler(decodeClientCommand(json)))
  ))
);