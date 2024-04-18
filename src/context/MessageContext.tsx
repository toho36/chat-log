import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Message {
  id: number;
  text: string;
}

interface MessageContextType {
  messages: Message[];
  addMessage: (text: string) => void;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const useMessageContext = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessageContext must be used within a MessageProvider');
  }
  return context;
};

interface MessageProviderProps {
  children: ReactNode;
}

export const MessageProvider: React.FC<MessageProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (text: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      text: text.trim()
    };
    setMessages([...messages, newMessage]);
  };

  const messageContextValue: MessageContextType = {
    messages,
    addMessage
  };

  return (
    <MessageContext.Provider value={messageContextValue}>
      {children}
    </MessageContext.Provider>
  );
};
