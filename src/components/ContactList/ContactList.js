import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import Button from '@mui/material/Button';
import { Box } from 'components/Box';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      <ul>
        {contacts &&
          contacts.map(({ name, number, id }) => (
            <Box display="flex" justifyContent="space-between" key={id}>
              {' '}
              {name}: {number}
              <Button
                variant="string"
                sx={{
                  bgcolor: 'black',
                  color: 'white',
                  boxShadow: 1,
                  borderRadius: 2,
                  fontWeight: 'bold',
                  fontSize: 10,
                  mb: 0.5,
                }}
                type="button"
                id={number}
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </Button>
            </Box>
          ))}
      </ul>
    </>
  );
};
