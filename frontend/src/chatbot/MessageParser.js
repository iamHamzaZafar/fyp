class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.handleHello();
    } else if (lowerCaseMessage.includes("help")) {
      this.actionProvider.handleHelp();
    } else if (lowerCaseMessage.includes("bye")) {
      this.actionProvider.handleGoodbye();
    } else if (lowerCaseMessage.includes("About")) {
      this.actionProvider.handleTalha();
    } else if (lowerCaseMessage.includes("talha")) {
      this.actionProvider.handleAbout();
    } else if (lowerCaseMessage.includes("About")) {
      this.actionProvider.handleAbout();
    } else if (lowerCaseMessage.includes("About")) {
      this.actionProvider.handleAbout();
    } else if (lowerCaseMessage.includes("About")) {
      this.actionProvider.handleAbout();
    }
    else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;
