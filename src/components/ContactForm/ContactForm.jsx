import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { BlackBorderTextField } from 'components/BlackBorderTextField/BlackBorderTextField.styled';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const nameContact = contacts.map(contact => contact.name);

    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    if (nameContact.includes(name)) {
      return alert('Rosie Simpson is already in contacts');
    }

    dispatch(
      addContact({
        name,
        number,
      })
    );

    e.target.reset();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <form onSubmit={handleSubmit}>
        <BlackBorderTextField
          helperText="Please enter your name"
          label="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <br />
        <BlackBorderTextField
          helperText=" Please enter your phone number"
          label="+1(111) 111 11 11"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <br />
        <Button
          variant="string"
          sx={{
            bgcolor: 'black',
            color: 'white',
            boxShadow: 1,
            borderRadius: 2,
            fontWeight: 'bold',
          }}
          type="submit"
        >
          Add contact
        </Button>
      </form>
    </Box>
  );
}
