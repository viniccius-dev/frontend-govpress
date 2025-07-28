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
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        '&.Mui-focused': {
          boxShadow: 'none',
        },
      },
    },
  },
};

export default muiTheme;
