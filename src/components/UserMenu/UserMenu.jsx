import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/authorization/operations';
import { selectUser } from '../../redux/authorization/selectors';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    user && (
      <Box>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="body1" color="textPrimary">
              Welcome, {user.name}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={handleLogout}
              sx={{
                backgroundColor: '#4caf50',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#45a049',
                },
                marginLeft: 2, 
              }}
            >
              Log Out
            </Button>
          </Grid>
        </Grid>
      </Box>
    )
  );
};

export default UserMenu;
