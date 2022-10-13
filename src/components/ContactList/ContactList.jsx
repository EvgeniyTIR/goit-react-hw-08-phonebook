import { Button, Title } from 'components/ContactList/ConstactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/constactAPI';
import { selectContacts, selectFilter } from 'redux/phonebook/selectors';
import { Box } from 'components/Box';

export const ContactList = ({ children }) => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  if (contacts.lendth === 0) return;

  const data =
    filter === ''
      ? contacts
      : contacts.filter(item => item.name.includes(filter));
  return (
    <>
      <Title>Contacts</Title>
      {children}
      <ul>
        {data.map(item => (
          <Box display="flex" justifyContent="space-between" key={item.id}>
            {' '}
            {item.name}: {item.phone}
            <Button
              type="button"
              id={item.number}
              onClick={() => dispatch(deleteContact(item.id))}
            >
              Delete
            </Button>
          </Box>
        ))}
      </ul>
    </>
  );
};
