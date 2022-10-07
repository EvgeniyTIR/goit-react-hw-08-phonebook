import React from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import FilerChange from './Filter/FilerChange';

export function App() {
  return (
    <Box maxWidth="500px" bg="background" ml="auto" mr="auto" mt={6} p={5}>
      <ContactForm />
      <ContactList>
        <FilerChange />
      </ContactList>
      <GlobalStyle />
    </Box>
  );
}
