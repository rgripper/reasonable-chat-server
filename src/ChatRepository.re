let initialChatState: ChatData.chatState = {users: [], messages: []};

let chatState = ref(initialChatState);

let getOrCreateUser = (name: string) => {
  let (user, users) =
    ChatRepoUtil.getOrCreateUser(name, chatState.contents.users);
  chatState := {...chatState.contents, users};
  user;
};

let setUserAvailability = (isAvailable: bool, id: int) =>
  chatState :=
    {
      ...chatState.contents,
      users:
        ChatRepoUtil.changeUserAvailability(
          isAvailable,
          id,
          chatState.contents.users,
        ),
    };

let addMessage = (text: string, senderId: int) => {
  let (message, messages) =
    ChatRepoUtil.addMessage(text, senderId, chatState.contents.messages);
  chatState := {...chatState.contents, messages};
  message;
};
let getState = () => chatState.contents;

let resetState = () => {
  chatState := initialChatState;
  initialChatState;
};