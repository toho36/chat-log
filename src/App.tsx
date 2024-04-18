import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';

interface Message {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (text: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      text: text.trim()
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          my: 4,
          border: '1px solid #ccc',
          padding: '16px',
          borderRadius: '8px',
          minHeight: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <MessageList messages={messages} />
        <MessageInput sendMessage={sendMessage} />
      </Box>
    </Container>
  );
};

export default App;
