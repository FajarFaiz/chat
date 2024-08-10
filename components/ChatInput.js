// components/ChatInput.js
import React from 'react';
import { Paper, TextField, IconButton, Tooltip } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatInput = ({ message, setMessage, sendMessage, loading }) => (
  <Paper
    component="form"
    sx={{ 
      p: { xs: '2px 4px', sm: '4px 8px' }, 
      display: 'flex', 
      alignItems: 'center',
      position: 'sticky',
      bottom: 0,
      zIndex: 1,
    }}
  >
    <TextField
      fullWidth
      multiline
      maxRows={4}
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder={loading ? "AI is thinking..." : "Type your message..."}
      onKeyPress={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          sendMessage(message);
        }
      }}
      disabled={loading}
      InputProps={{
        disableUnderline: true,
        sx: { flex: 1 },
      }}
    />
    <Tooltip title="Send message">
      <IconButton 
        color="primary" 
        sx={{ p: '10px' }} 
        aria-label="send"
        onClick={() => sendMessage(message)}
        disabled={loading}
      >
        <SendIcon />
      </IconButton>
    </Tooltip>
  </Paper>
);

export default ChatInput;