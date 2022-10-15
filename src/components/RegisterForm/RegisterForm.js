import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { BlackBorderTextField } from 'components/BlackBorderTextField/BlackBorderTextField.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <BlackBorderTextField
          helperText="Please enter your name"
          label="Username"
          type="text"
          name="name"
        />

        <BlackBorderTextField
          helperText="Please enter your email"
          label="Email"
          type="email"
          name="email"
        />

        <BlackBorderTextField
          helperText="Please enter your password"
          label="Password"
          type="password"
          name="password"
        />

        <Button
          type="submit"
          variant="string"
          sx={{
            bgcolor: 'black',
            color: 'white',
            boxShadow: 1,
            borderRadius: 2,
            fontWeight: 'bold',
          }}
        >
          Register
        </Button>
      </form>
    </Box>
  );
};
