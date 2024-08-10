// ./components/ChatApp.js

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import SettingsArea from './SettingsArea';
import HelpArea from './HelpArea';
import AppHeader from './AppHeader';
import ErrorSnackbar from './ErrorSnackBar';
import getTheme from '../styles/theme';
import { simulateAIResponse } from '../utils/api';
import useLocalStorage from '../hooks/useLocalStorage';

const GREETING_MESSAGE = "Welcome to Headstarter AI Support! How can I assist you today?";

export default function ChatApp() {
  const [mode, setMode] = useLocalStorage('themeMode', 'light');
  const theme = useMemo(() => getTheme(mode), [mode]);

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [conversationContext, setConversationContext] = useState([]);
  const [language, setLanguage] = useLocalStorage('language', 'en');
  const [activeTab, setActiveTab] = useState('chat');

  useEffect(() => {
    setMessages([{
      content: GREETING_MESSAGE,
      role: 'assistant',
      timestamp: new Date().toISOString(),
    }]);
  }, []);

  const sendMessage = useCallback(async (content) => {
    if (content.trim() && !loading) {
      const userMessage = {
        content,
        role: 'user',
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, userMessage]);
      setLoading(true);
      setConversationContext(prev => [...prev, content]);

      try {
        const aiResponse = await simulateAIResponse(content, conversationContext);
        const assistantMessage = {
          content: aiResponse.content,
          role: 'assistant',
          timestamp: new Date().toISOString(),
          intent: aiResponse.intent,
          sentiment: aiResponse.sentiment,
        };
        setMessages(prev => [...prev, assistantMessage]);
      } catch (error) {
        console.error('Failed to get AI response:', error);
        setError('Failed to get AI response. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  }, [loading, conversationContext]);

  const handleTranslate = useCallback(async (index) => {
    // Implement translation logic here
  }, [messages, language]);

  const handleFeedback = useCallback((index, isPositive) => {
    setMessages(prev => prev.map((msg, i) => 
      i === index ? {...msg, feedback: isPositive ? 'positive' : 'negative'} : msg
    ));
  }, []);

  const filteredMessages = useMemo(() => 
    messages.filter(msg => 
      msg.content.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [messages, searchTerm]
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'chat':
        return (
          <ChatArea 
            messages={filteredMessages}
            loading={loading}
            sendMessage={sendMessage}
            handleTranslate={handleTranslate}
            handleFeedback={handleFeedback}
          />
        );
      case 'settings':
        return <SettingsArea />;
      case 'help':
        return <HelpArea />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <AppHeader 
            language={language}
            setLanguage={setLanguage}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            mode={mode}
            setMode={setMode}
          />
          {renderContent()}
        </Box>
      </Box>
      <ErrorSnackbar error={error} setError={setError} />
    </ThemeProvider>
  );
}