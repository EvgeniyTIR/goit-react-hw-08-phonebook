import { Button } from '@mui/material';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <div className={css.wrapper}>
      <p className={css.useremail}>Welcome, {user.email}</p>
      <Button
        variant="string"
        sx={{
          bgcolor: 'black',
          color: 'white',
          boxShadow: 1,
          borderRadius: 2,
          fontWeight: 'bold',
        }}
        onClick={handleLogOut}
      >
        Logout
      </Button>
    </div>
  );
};
