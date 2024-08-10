import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import MessageItem from './MessageItem';

const MessageList = ({ messages, loading, handleTranslate, handleFeedback }) => {
  return (
    <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
      {messages.map((msg, index) => (
        <MessageItem
          key={index}
          msg={msg}
          index={index}
          handleTranslate={handleTranslate}
          handleFeedback={handleFeedback}
        />
      ))}
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default MessageList;