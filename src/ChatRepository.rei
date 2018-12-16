let getOrCreateUser: string => ChatData.user;

let setUserAvailability: (bool, int) => unit;

let addMessage: (string, int) => ChatData.message;

let getState: unit => ChatData.chatState;

let resetState: unit => ChatData.chatState;