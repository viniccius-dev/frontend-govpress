import { Background } from "../pages/SignIn/styles";

export const muiTheme = {
  MuiMenuItem: {
    styleOverrides: {
      root: {
        '&.Mui-focusVisible': {
          outline: 'none',
        }
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        '&.Mui-focused': {
          color: '#47536B',
          fontWeight: 'bold',
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          border: '2px solid #737373'
        },
        '&.Mui-focused': {
          boxShadow: 'none',
        },
      },
    },
  },
};

export default muiTheme;
