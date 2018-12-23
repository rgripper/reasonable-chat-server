let encodeMessage = (message: ChatData.message) =>
  Json.Encode.(
    object_([
      ("id", int(message.id)),
      ("senderId", int(message.senderId)),
      ("text", string(message.text)),
      (
        "creationDate",
        Js.Date.(message.creationDate->fromFloat->toISOString->string),
      ),
    ])
  );

let encodeUser = (user: ChatData.user) =>
  Json.Encode.(
    object_([
      ("id", int(user.id)),
      ("name", string(user.name)),
      ("avatarUrl", nullable(string, user.avatarUrl)),
      ("isAvailable", bool(user.isAvailable)),
      ("isTyping", bool(user.isTyping)),
    ])
  );

let encodeChatState = (chatState: ChatData.chatState, userId: int) =>
  Json.Encode.(
    object_([
      ("users", list(encodeUser, chatState.users)),
      ("messages", list(encodeMessage, chatState.messages)),
      ("currentUserId", int(userId)),
    ])
  );

/* TODO */
let encodeServerEvent = (serverEvent: ServerTypes.serverEvent): Js.Json.t =>
  Json.Encode.(
    ServerTypes.(
      switch (serverEvent) {
      | LoginSuccessful(x, userId) =>
        object_([("type", int(3)), ("chat", encodeChatState(x, userId))])
      | UserAvailable(x) =>
        object_([("type", int(1)), ("user", encodeUser(x))])
      | UserUnavailable(x) =>
        object_([("type", int(0)), ("userId", int(x.id))])
      | MessagePublished(x) =>
        object_([("type", int(2)), ("message", encodeMessage(x))])
      }
    )
  );

let decodeClientCommand = (json: Js.Json.t): ServerTypes.clientCommand =>
  Json.Decode.(
    switch (json |> field("type", int)) {
    | 0 => Login(json |> field("userName", string))
    | 1 => Logout
    | 2 => PublishMessage(json |> field("text", string))
    | _ => Logout /* TODO */
    }
  );

[@bs.module "SocketIOInterop"]
external js_startServer:
  (
    Js.Array.t(string),
    (
      ServerTypes.clientAuthentication,
      string,
      Js.Json.t,
      (Js.Json.t, string) => unit,
      (Js.Json.t, string) => unit
    ) =>
    ServerTypes.clientAuthentication
  ) =>
  unit =
  "startServer";

type clientEventHandler =
  (
    ServerTypes.clientAuthentication,
    option(ServerTypes.clientCommand),
    ServerTypes.serverEvent => unit,
    ServerTypes.serverEvent => unit
  ) =>
  ServerTypes.clientAuthentication;

let startServer = (handleClientEvent: clientEventHandler) =>
  js_startServer(
    [|"customEvent", "disconnect"|],
    (clientAuthentication, eventName, data, rawBroadcaster, rawSender) =>
    handleClientEvent(
      clientAuthentication,
      eventName === "disconnect" ? None : Some(decodeClientCommand(data)),
      x => x->encodeServerEvent->rawBroadcaster("customEvent"),
      x => x->encodeServerEvent->rawSender("customEvent"),
    )
  );