import React from 'react';
import { useMessageContext} from '../context/MessageContext';


const MessageList: React.FC = () => {
  const { messages } = useMessageContext();

  return (
    <div style={{ overflowY: 'auto', flex: 1 }}>
      {messages.map(message => (
        <div key={message.id}>{message.text}</div>
      ))}
    </div>
  );
};

export default MessageList;
