type message = {
  id: int,
  creationDate: float,
  senderId: int,
  text: string
}

type user = {
  id: int,
  name: string,
  avatarUrl: option(string),
  isAvailable: bool,
  isTyping: bool
}

type chatState = {
  users: list(user),
  messages: list(message)
}