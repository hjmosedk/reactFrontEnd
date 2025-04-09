import { Box, Button, Typography } from '@mui/material';
import { useProductList } from '../hooks';
import { useNavigate } from 'react-router';

export const HeroPage = () => {
  const { productList, loading } = useProductList();
  const navigate = useNavigate();

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
      {loading && <Typography>Loading...</Typography>}

      {!loading && productList && (
        <div>
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
            onClick={() => {
              navigate('/products');
            }}
          >
            Shop Now
          </Button>
        </div>
      )}
    </Box>
  );
};
