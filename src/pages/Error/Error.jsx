import { Box, Typography } from '@mui/material';
import React from 'react';

const Error = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography component="h1" variant="h2">
        Invalid route!
      </Typography>
    </Box>
  );
};

export default Error;
