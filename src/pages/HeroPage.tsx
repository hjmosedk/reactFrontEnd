import { Box, Button, Typography } from '@mui/material';

export const HeroPage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(https://cdn2.thecatapi.com/images/bhs.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant='h2' sx={{ mb: 2 }}>
        Welcome to Rainbow Baby Dragon Shop
      </Typography>
      <Button
        variant='contained'
        color='primary'
        size='large'
        sx={{
          padding: '10px 20px',
          fontSize: '1.5rem',
          borderRadius: '8px',
        }}
        onClick={() => alert('CTA Clicked!')} // Replace with your desired action
      >
        Shop Now
      </Button>
    </Box>
  );
};
