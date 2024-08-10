import React, { useState } from 'react';
import { Box } from '@mui/material';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

const ChatArea = ({ messages, loading, sendMessage, handleTranslate, handleFeedback }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    sendMessage(message);
    setMessage('');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <MessageList 
        messages={messages} 
        loading={loading} 
        handleTranslate={handleTranslate}
        handleFeedback={handleFeedback}
      />
      <ChatInput 
        message={message}
        setMessage={setMessage}
        sendMessage={handleSend}
        loading={loading}
      />
    </Box>
  );
};

export default ChatArea;