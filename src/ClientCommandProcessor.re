let processClientCommand =
    (
      auth: ServerTypes.clientAuthentication,
      clientCommand: ServerTypes.clientCommand,
    )
    : (
        ServerTypes.clientAuthentication,
        option(ServerTypes.serverEvent),
        option(ServerTypes.serverEvent),
      ) =>
  switch (auth, clientCommand) {
  | (Authenticated(user), PublishMessage(text)) => (
      Authenticated(user),
      Some(MessagePublished(ChatRepository.addMessage(text, user.id))),
      None,
    )
  | (Authenticated(user), Login(_)) => (Authenticated(user), None, None)
  | (Authenticated(user), Logout) =>
    ChatRepository.setUserAvailability(false, user.id);
    (Unauthenticated, Some(UserUnavailable(user)), None);
  | (Unauthenticated, Login(userName)) =>
    let user = ChatRepository.getOrCreateUser(userName);
    ChatRepository.setUserAvailability(true, user.id);
    (
      Authenticated(user),
      Some(UserAvailable(user)),
      Some(LoginSuccessful(ChatRepository.getState(), user.id)),
    );
  | (Unauthenticated, _) => (Unauthenticated, None, None)
  };
