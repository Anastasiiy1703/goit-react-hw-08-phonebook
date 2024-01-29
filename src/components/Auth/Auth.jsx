import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const greenTheme = createTheme({
  palette: {
    primary: {
      main: '#4caf50', 
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', 
  },
});

const Auth = () => {
  return (
    <ThemeProvider theme={greenTheme}>
      <Box>
        <List
          sx={{
            display: 'flex',
            gap: '20px', 
            '& .MuiListItem-root': {
              color: 'white', 
              borderRadius: 1,
              transition: 'background-color 0.5s ease',
              backgroundColor: '#4caf50',
              border: '1px solid #4caf50', 
            },
            '& .MuiListItem-root:hover': {
              backgroundColor: '#388e3c', 
              borderColor: '#388e3c', 
            },
          }}
        >
          <ListItem to="/login" component={Link}>
            Login
          </ListItem>
          <ListItem to="/register" component={Link}>
            Register
          </ListItem>
        </List>
      </Box>
    </ThemeProvider>
  );
};

export default Auth;
