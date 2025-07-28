export const muiTheme = {
  MuiList: {
    styleOverrides: {
      root: {
        backgroundColor: '#9B9B9B',
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      root: {
        color: '#fff',
        backgroundColor: '#737373',
        borderRadius: 4,
      },
      icon: {
        color: '#fff', // ícone da seta
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: '#292525',
        '&.Mui-focused': {
          color: '#2C2C2C',
          fontWeight: 'bold',
        },
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        color: '#fff',
        backgroundColor: '#9B9B9B',
        '&:hover': {
          backgroundColor: '#A6A6A6',
        },
        '&.Mui-focusVisible': {
          backgroundColor: '#A6A6A6',
          outline: 'none',
        },
        '&.Mui-selected': {
          backgroundColor: '#A6A6A6',
          '&:hover': {
            backgroundColor: '#979797',
          },
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
