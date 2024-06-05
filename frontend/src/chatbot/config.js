import { createChatBotMessage } from 'react-chatbot-kit';

const botName = "ChatBot";

const config = {
  botName: botName,
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}. How can I help you today?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
    //   backgroundColor: '#5ccc9d',
    backgroundColor: '#8a8578'
    },
  },
};

export default config;
