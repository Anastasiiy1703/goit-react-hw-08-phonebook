import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CloseIcon from '@mui/icons-material/Close'; 
import { Typography } from '@mui/material';

const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Box>
      <List>
        {contacts &&
          contacts.map(contact => (
            <ListItem key={contact.id}>
              <Grid
                container
                spacing={1}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', 
                  backgroundColor: 'white', 
                  borderRadius: '8px', 
                  padding: 3,
                }}
              >
                <Grid item sx={{ display: 'flex', gap: 1 }}>
                  <Grid item>
                    <Typography component="p" variant="h6">
                      {contact.name}:
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography component="p" variant="h6">
                      {contact.number}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="inherit" 
                    sx={{
                      '&:hover': {
                        backgroundColor: '#f0f0f0', 
                      },
                    }}
                    onClick={() => handleDelete(contact.id)}
                  >
                    <CloseIcon fontSize="small" sx={{ color: 'red' }} /> 
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default ContactsList;
