import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filtersSlice';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box
      component="div"
      sx={{
        marginTop: 4,
        width: 580,
      }}
    >
      <Typography component="p" variant="h6" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        Filter contacts by name
      </Typography>
      <TextField
        margin="normal"
        fullWidth
        id="filter"
        label="Name"
        name="filter"
        autoComplete="filter"
        onChange={handleInputChange}
        sx={{
            '& .Mui-focused': {
            borderColor: '#4caf50', 
          },
        }}
      />
    </Box>
  );
};

export default Filter;
