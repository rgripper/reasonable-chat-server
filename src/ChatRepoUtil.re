let createAvatarUrl = (key: string) => {j|https://robohash.org/$(key)?size=128x128|j};

let getNewListIndex = items => List.length(items) + 1;

let createUser = (id, name): ChatData.user => {
  name,
  isAvailable: false,
  isTyping: false,
  id,
  avatarUrl: name->createAvatarUrl->Some,
};

let createMessage = (id, text, senderId): ChatData.message => {
  id,
  text,
  creationDate: Js.Date.now(),
  senderId,
};

let getOrCreateUser = (name: string, users: list(ChatData.user)) => {
  let findUserByName = (x: ChatData.user) => x.name === name;
  let existingUser = Belt.List.getBy(users, findUserByName);
  switch (existingUser) {
  | Some(user) => (user, users)
  | None =>
    createUser(getNewListIndex(users), name)
    ->(user => (user, [user, ...users]))
  };
};

let changeUserAvailability =
    (isAvailable: bool, id: int, users: list(ChatData.user)) => {
  let findUserById = (x: ChatData.user) => x.id === id;
  let existingUser = Belt.List.getBy(users, findUserById);
  switch (existingUser) {
  | Some(user) => [
      {...user, isAvailable},
      ...List.filter((x: ChatData.user) => x.id !== id, users),
    ]
  | None => users
  };
};

let addMessage =
    (text: string, senderId: int, messages: list(ChatData.message)) => {
  let message = createMessage(getNewListIndex(messages), text, senderId);
  (message, [message, ...messages]);
};