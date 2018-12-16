type clientAuthentication =
  | Authenticated(ChatData.user)
  | Unauthenticated;

type clientCommand =
  | PublishMessage(string)
  | Login(string)
  | Logout;

type serverEvent =
  | LoginSuccessful(ChatData.chatState)
  | UserAvailable(ChatData.user)
  | UserUnavailable(ChatData.user)
  | MessagePublished(ChatData.message);

let mapClientCommand =
    (auth: clientAuthentication, clientCommand: clientCommand): (clientAuthentication, option(serverEvent), option(serverEvent)) =>
  switch (auth, clientCommand) {
  | (Authenticated(user), PublishMessage(text)) =>
    (Authenticated(user), Some(MessagePublished(ChatRepository.addMessage(text, user.id))), None);
  | (Authenticated(user), Login(_)) => (Authenticated(user), None, None)
  | (Authenticated(user), Logout) =>
    ChatRepository.setUserAvailability(false, user.id);
    (Unauthenticated, Some(UserUnavailable(user)), None);
  | (Unauthenticated, Login(userName)) =>
    let user = ChatRepository.getOrCreateUser(userName);
    ChatRepository.setUserAvailability(true, user.id);
    (Authenticated(user), Some(UserAvailable(user)), Some(LoginSuccessful(ChatRepository.getState())));
  | (Unauthenticated, _) => (Unauthenticated, None, None)
  };