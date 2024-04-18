import React from 'react';

interface SendButtonProps {
  onClick: () => void;
}

const SendButton: React.FC<SendButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ marginLeft: '8px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', cursor: 'pointer' }}
    >
      Send
    </button>
  );
};

export default SendButton;
