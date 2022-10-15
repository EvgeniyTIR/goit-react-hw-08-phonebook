import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/contacts/filterSlice';
import { BlackBorderTextField } from 'components/BlackBorderTextField/BlackBorderTextField.styled';

export function Filter() {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(addFilter(e.target.value));
  };

  return (
    <label>
      <BlackBorderTextField
        helperText=" Please enter name"
        label="Find contacts by name"
        name="name"
        required
        type="text"
        onChange={changeFilter}
        sx={{ mt: 2 }}
      />
    </label>
  );
}
