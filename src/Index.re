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
  ChatRepository.addMessage("Are you talking to me?", dummyUser.id)->ignore;
  ChatRepository.addMessage("Well I'm the only one here.", dummyUser.id)
  ->ignore;
  ChatRepository.setUserAvailability(false, dummyUser.id);
};

addDummyData();

Js.Console.log("Starting the server...");

SocketIO.startServer((authenticationState, clientCommand, broadcast, send) => {
  let (newAuthenticationState, eventToBroadcast, eventToSend) =
    ClientCommandProcessor.processClientCommand(
      authenticationState,
      clientCommand,
    );

  Belt.Option.map(eventToBroadcast, broadcast)->ignore;
  Belt.Option.map(eventToSend, send)->ignore;
  newAuthenticationState;
});