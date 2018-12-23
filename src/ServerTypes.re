type clientAuthentication =
  | Authenticated(ChatData.user)
  | Unauthenticated;

type clientCommand =
  | PublishMessage(string)
  | Login(string)
  | Logout;

type serverEvent =
  | LoginSuccessful(ChatData.chatState, int)
  | UserAvailable(ChatData.user)
  | UserUnavailable(ChatData.user)
  | MessagePublished(ChatData.message);