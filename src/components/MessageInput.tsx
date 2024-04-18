import React, { useState } from 'react';
import { useMessageContext} from '../context/MessageContext';
import SendButton from './SendButton';

const MessageInput: React.FC = () => {
  const { addMessage } = useMessageContext();
  const [inputText, setInputText] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      addMessage(inputText);
      setInputText('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
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
