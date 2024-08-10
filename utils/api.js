// utils/api.js
// Simulated API calls (replace with actual API calls in production)
export const simulateAIResponse = async (message, context) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const responses = [
      "I understand your concern. Let me help you with that.",
      "Thank you for providing that information. Here's what I can suggest...",
      "I'm sorry to hear you're experiencing this issue. Let's troubleshoot together.",
      "That's a great question. Here's what our knowledge base says about it...",
      "I appreciate your patience. I'm looking into this for you right now.",
    ];
    return {
      content: responses[Math.floor(Math.random() * responses.length)],
      intent: ['inquiry', 'complaint', 'support', 'feedback'][Math.floor(Math.random() * 4)],
      sentiment: Math.random() > 0.5 ? 'positive' : 'negative',
    };
  };
  
  export const translateMessage = async (message, targetLanguage) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return `Translated: ${message} (to ${targetLanguage})`;
  };
  