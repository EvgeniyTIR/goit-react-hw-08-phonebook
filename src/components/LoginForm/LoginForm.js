import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import Box from '@mui/material/Box';
import { BlackBorderTextField } from 'components/BlackBorderTextField/BlackBorderTextField.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
          Log In
        </Button>
      </form>
    </Box>
  );
};
