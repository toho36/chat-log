import React, { useState } from 'react';
import SendButton from './SendButton';

interface MessageInputProps {
  sendMessage: (text: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ sendMessage }) => {
  const [inputText, setInputText] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputText.trim() !== '') {
      sendMessage(inputText);
      setInputText('');
    }
  };
  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      sendMessage(inputText);
      setInputText('');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <input
      type="text"
      value={inputText}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
      placeholder="Type your message..."
      style={{ flex: '1', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
    />
    <SendButton onClick={handleSendMessage} />
  </div>
  );
};

export default MessageInput;
