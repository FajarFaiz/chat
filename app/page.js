'use client';

import { Box, Button, Stack, TextField, CircularProgress, IconButton, Avatar, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { format } from 'date-fns'; // For formatting timestamps

export default function Home() {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [
      {
        role: 'assistant',
        content: "Hi! I'm the Headstarter support assistant. How can I help you today?",
        timestamp: new Date().toISOString(),
      },
    ];
  });

  const [message, setMessage] = useState(''); // User input message
  const [loading, setLoading] = useState(false); // Loading state for AI response
  const [context, setContext] = useState(() => {
    const savedContext = localStorage.getItem('chatContext');
    return savedContext ? JSON.parse(savedContext) : [];
  });

  const [editIndex, setEditIndex] = useState(null); // Index of the message being edited
  const [editedMessage, setEditedMessage] = useState(''); // Edited message content

  // Save messages and context to localStorage with a small delay
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('chatContext', JSON.stringify(context));
  }, [context]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);

    const newMessages = [
      ...messages,
      { role: 'user', content: message, timestamp: new Date().toISOString() },
      { role: 'assistant', content: '...', timestamp: new Date().toISOString() }, // Typing indicator
    ];
    setMessages(newMessages);
    setMessage('');

    const updatedContext = [
      ...context,
      { role: 'user', content: message },
    ];

    try {
      const response = await axios.post('/api/route', {
        context: updatedContext,
      });

      if (response.data && response.data.content) {
        const aiResponse = response.data.content;

        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          updatedMessages[updatedMessages.length - 1] = {
            role: 'assistant',
            content: aiResponse,
            timestamp: new Date().toISOString(),
          };
          return updatedMessages;
        });

        setContext((prevContext) => [
          ...prevContext,
          { role: 'assistant', content: aiResponse },
        ]);
      } else {
        throw new Error('Unexpected response structure');
      }
    } catch (error) {
      console.error('Error fetching chat response:', error);
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages[updatedMessages.length - 1] = {
          role: 'assistant',
          content: 'Sorry, something went wrong. Please try again.',
          timestamp: new Date().toISOString(),
        };
        return updatedMessages;
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = (index) => {
    setMessages((prevMessages) => {
      const updatedMessages = prevMessages.filter((_, i) => i !== index);
      localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
      return updatedMessages;
    });
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditedMessage(messages[index].content);
  };

  const saveEditedMessage = () => {
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages];
      updatedMessages[editIndex] = { ...updatedMessages[editIndex], content: editedMessage };
      localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
      return updatedMessages;
    });
    setEditIndex(null);
    setEditedMessage('');
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={2}
    >
      <Stack
        direction="column"
        width={{ xs: '90%', sm: '80%', md: '60%' }} // Responsive width
        height="80vh"
        border="1px solid"
        borderColor="divider"
        borderRadius={8}
        boxShadow={3}
        p={2}
        spacing={2}
        bgcolor="background.paper"
      >
        <Stack
          direction="column"
          spacing={1}
          flexGrow={1}
          overflow="auto"
          pr={1}
          sx={{ '&::-webkit-scrollbar': { display: 'none' } }} // Hide scrollbar
        >
          {messages.map((msg, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection="column"
              alignItems={msg.role === 'assistant' ? 'flex-start' : 'flex-end'}
              mb={2}
            >
              <Box display="flex" alignItems="center">
                <Avatar
                  sx={{ mr: 1 }}
                >
                  {msg.role === 'assistant' ? 'A' : 'U'}
                </Avatar>
                <Box
                  bgcolor={msg.role === 'assistant' ? 'primary.main' : 'secondary.main'}
                  color="white"
                  borderRadius={16}
                  p={2}
                  maxWidth="80%"
                  boxShadow={1}
                  mb={1} // Margin bottom for spacing
                >
                  {msg.content}
                </Box>
              </Box>
              {msg.timestamp && (
                <Typography
                  variant="caption"
                  color="text.secondary"
                  align={msg.role === 'assistant' ? 'left' : 'right'}
                >
                  {format(new Date(msg.timestamp), 'p, MMM d')}
                </Typography>
              )}
              {msg.role === 'user' && !editIndex && (
                <Stack direction="row" spacing={1}>
                  <IconButton
                    color="inherit"
                    aria-label="edit"
                    onClick={() => startEditing(index)}
                    sx={{ color: 'text.secondary' }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    aria-label="delete"
                    onClick={() => deleteMessage(index)}
                    sx={{ color: 'error.main' }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              )}
              {editIndex === index && (
                <Stack direction="row" spacing={1} mt={1}>
                  <TextField
                    fullWidth
                    value={editedMessage}
                    onChange={(e) => setEditedMessage(e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                  <Button
                    variant="contained"
                    onClick={saveEditedMessage}
                    size="small"
                  >
                    Save
                  </Button>
                </Stack>
              )}
            </Box>
          ))}
          {loading && (
            <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
              <CircularProgress size={24} />
            </Box>
          )}
        </Stack>
        <Stack direction="row" spacing={1}>
          <TextField
            label="Type your message..."
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') sendMessage();
            }}
            disabled={loading}
            variant="outlined"
            size="small"
          />
          <Button
            variant="contained"
            onClick={sendMessage}
            disabled={loading || !message.trim()}
            size="small"
          >
            Send
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
