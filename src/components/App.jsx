import React from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import FilerChange from './Filter/FilerChange';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/constactAPI';
import { selectIsLoading, selectError } from 'redux/selectors';

export function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box maxWidth="500px" bg="background" ml="auto" mr="auto" mt={6} p={5}>
      <ContactForm />
      <ContactList>
        <FilerChange />
        <br />
        {loading && <b>Request in progress...</b>}
        {error && <b>Sorry, something goes wrong</b>}
      </ContactList>
      <GlobalStyle />
    </Box>
  );
}
