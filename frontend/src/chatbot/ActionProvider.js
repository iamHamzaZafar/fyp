class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleHello = () => {
      const message = this.createChatBotMessage("Hello! How can I assist you today?");
      this.updateChatbotState(message);
    };
  
    handleHelp = () => {
      const message = this.createChatBotMessage(
        "Sure! I can help you with various topics. Just let me know what you need assistance with."
      );
      this.updateChatbotState(message);
    };
  
    handleGoodbye = () => {
      const message = this.createChatBotMessage("Goodbye! Have a great day.");
      this.updateChatbotState(message);
    };
  
    handleDefault = () => {
      const message = this.createChatBotMessage(
        "Sorry, I didn't understand that. If you need help, feel free to ask!"
      );
      this.updateChatbotState(message);
    };
  
    updateChatbotState(message) {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;
  