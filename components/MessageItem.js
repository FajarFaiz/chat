// components/MessageItem.js
import React from 'react';
import { Paper, Avatar, Typography, IconButton, Box, Chip } from '@mui/material';
import { format } from 'date-fns';
import TranslateIcon from '@mui/icons-material/Translate';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const MessageItem = React.memo(({ msg, index, handleTranslate, handleFeedback }) => (
  <Paper
    elevation={3}
    sx={{
      p: 2,
      mb: 2,
      bgcolor: msg.role === 'assistant' ? 'background.default' : 'primary.main',
      color: msg.role === 'assistant' ? 'text.primary' : 'white',
      borderRadius: '12px',
      maxWidth: '75%',
      alignSelf: msg.role === 'assistant' ? 'flex-start' : 'flex-end',
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <Avatar sx={{ width: 24, height: 24, mr: 1, bgcolor: msg.role === 'assistant' ? 'primary.main' : 'secondary.main' }}>
        {msg.role === 'assistant' ? 'AI' : 'U'}
      </Avatar>
      <Typography variant="body1">{msg.content}</Typography>
    </Box>
    {msg.translatedContent && (
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontStyle: 'italic' }}>
        {msg.translatedContent}
      </Typography>
    )}
    <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
      {format(new Date(msg.timestamp), 'dd/MM/yyyy HH:mm:ss')}
    </Typography>
    {msg.intent && <Chip label={`Intent: ${msg.intent}`} size="small" sx={{ mt: 1, mr: 1 }} />}
    {msg.sentiment && <Chip label={`Sentiment: ${msg.sentiment}`} size="small" sx={{ mt: 1 }} />}
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
      <IconButton size="small" onClick={() => handleTranslate(index)}>
        <TranslateIcon fontSize="small" />
      </IconButton>
      {msg.role === 'assistant' && (
        <>
          <IconButton size="small" onClick={() => handleFeedback(index, true)}>
            <ThumbUpIcon fontSize="small" color={msg.feedback === 'positive' ? 'primary' : 'inherit'} />
          </IconButton>
          <IconButton size="small" onClick={() => handleFeedback(index, false)}>
            <ThumbDownIcon fontSize="small" color={msg.feedback === 'negative' ? 'error' : 'inherit'} />
          </IconButton>
        </>
      )}
    </Box>
  </Paper>
));

export default MessageItem;