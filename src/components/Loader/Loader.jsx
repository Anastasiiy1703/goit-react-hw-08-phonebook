import { Box } from '@mui/material';
import { Grid } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        visible={true}
        height={100}
        width={100}
        color="#4caf50"  
        secondaryColor="#1976d2"  
        ariaLabel="star-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Box>
  );
};

export default Loader;
