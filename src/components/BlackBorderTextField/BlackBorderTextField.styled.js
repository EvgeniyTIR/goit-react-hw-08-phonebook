import TextField from '@mui/material/TextField';
import styled from 'styled-components';

export const BlackBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: black;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: black;
    }
  }
`;
