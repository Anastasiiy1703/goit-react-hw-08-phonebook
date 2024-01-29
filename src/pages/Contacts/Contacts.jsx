import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/root/selectors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Loader from 'components/Loader/Loader';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <Box
      sx={{
        marginTop: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h2" variant="h4">
        Phonebook
      </Typography>
      <ContactsForm />
      <Typography component="h2" variant="h4">
        Contacts
      </Typography>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactsList />
    </Box>
  );
};

export default Contacts;
