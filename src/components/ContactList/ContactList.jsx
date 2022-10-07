import { Button, Title } from 'components/ContactList/ConstactList.styled';
import { deleteContact } from 'redux/store';
import { useSelector, useDispatch } from 'react-redux';

export const ContactList = ({ children }) => {
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

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
          <li key={item.id}>
            {' '}
            {item.name}: {item.number}
            <Button
              type="button"
              id={item.number}
              onClick={() => dispatch(deleteContact(item.id))}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};
