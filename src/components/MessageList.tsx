import React from 'react';

interface Message {
  id: number;
  text: string;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div style={{ overflowY: 'auto', flex: 1 }}>
      {messages.map(message => (
        <div key={message.id}>{message.text}</div>
      ))}
    </div>
  );
};

export default MessageList;
