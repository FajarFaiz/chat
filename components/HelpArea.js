// components/HelpArea.js
import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: "How do I reset my password?",
    answer: "To reset your password, click on the 'Forgot Password' link on the login page and follow the instructions sent to your email."
  },
  {
    question: "What are your business hours?",
    answer: "Our customer support is available 24/7. However, for specialized inquiries, our office hours are Monday to Friday, 9 AM to 5 PM EST."
  },
  {
    question: "How can I track my order?",
    answer: "You can track your order by logging into your account and visiting the 'Order History' section. There, you'll find a tracking number for each shipped order."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer international shipping to most countries. Shipping costs and delivery times vary depending on the destination."
  },
];

const HelpArea = () => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>Help & FAQ</Typography>
    {faqs.map((faq, index) => (
      <Accordion key={index}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{faq.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{faq.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </Box>
);

export default HelpArea;
