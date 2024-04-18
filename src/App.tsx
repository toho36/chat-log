import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import { MessageProvider } from './context/MessageContext';

const App: React.FC = () => {
  return (
    <MessageProvider>
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
          <MessageList />
          <MessageInput />
        </Box>
      </Container>
    </MessageProvider>
  );
};

export default App;
