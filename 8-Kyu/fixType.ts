//Solve all the typing issues in the code without changing the implementation

const sendMessage = (message: { to: string; text?: string }) => {
  return message.text?.toUpperCase();
};

sendMessage({ to: "Alice" });
