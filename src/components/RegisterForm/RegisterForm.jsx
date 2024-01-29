import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { registerUser } from '../../redux/authorization/operations';

const greenTheme = createTheme({
  palette: {
    primary: {
      main: '#4caf50', 
    },
  },
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { username, email, password } = e.target.elements;
    dispatch(
      registerUser({
        name: username.value,
        email: email.value,
        password: password.value,
      })
    );
    e.target.reset();
  };

  return (
    <ThemeProvider theme={greenTheme}>
      <Container>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
              borderRadius: '8px', 
              padding: '20px', 
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              sx={{ mb: 2 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              sx={{ mb: 2 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{ mb: 2 }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
            >
              Register
            </Button>
            <Grid container spacing={1}>
              <Grid item>
                <Typography component="p">Already have an account?</Typography>
              </Grid>
              <Grid item>
                <Link to="/login" component={RouterLink} sx={{ color: '#4caf50', mt: 2 }}>
                  {'Login'}
                </Link>
                <ArrowDropDownIcon sx={{ fontSize: 40, color: '#4caf50', mt: 2 }} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default RegisterForm;
