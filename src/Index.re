type serverBroadcastEvent =
  | UserLeft(int)
  | UserJoin(ChatData.user)
  | MessageAdded(string);

type clientEvent =
  | Login(string)
  | Logout
  | TryLogin(string)
  | AddMessage(string);

let addDummyData = () => {
  let dummyUser = ChatRepository.getOrCreateUser("Dummy user");
  ChatRepository.addMessage("Are you talking to me?", dummyUser.id);
  ChatRepository.addMessage("Well I'm the only one here.", dummyUser.id);
  ChatRepository.setUserAvailability(false, dummyUser.id);
};

addDummyData();

/* SocketIO.startServer((broadcast: SocketIO.broadcaster, send: SocketIO.sender, subscribe: SocketIO.clientEventSubscriber) => {
  let clientAuthentication = ref(ServerTypes.Unauthenticated);
  subscribe(eventName: string, clientCommand: ServerTypes.clientCommand) => {
    let (auth, broadcastEvent, replyEvent) =
      ServerTypes.mapClientCommand(
        clientAuthentication.contents,
        clientCommand,
      );
    clientAuthentication := auth;
    broadcast(broadcastedEvent);
    send(replyEvent);
  });
}); */