import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Container
      fixed
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography
        component="h1"
        variant="h2"
        sx={{
          color: '#388e3c', 
          textShadow: '2px 2px 4px rgba(0, 0, 255, 0.5)', 
          textAlign: 'center', 
          fontFamily: 'cursive', 
          background: 'linear-gradient(to right, #4caf50, #388e3c)', 
          WebkitBackgroundClip: 'text', 
          marginBottom: '20px', 
          padding: '20px', 
          borderRadius: '8px', 
          letterSpacing: '2px', 
        }}
      >
        Welcome to the Phonebook!
      </Typography>
    </Container>
  );
};

export default Home;
