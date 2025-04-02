import { Box, Button, Typography } from '@mui/material';
import { getProducts } from '../services/productsService';
import { useProducts } from '../contexts/products/ProductsContext';
import { ProductsActionsTypes } from '../contexts/products/ProductsActions';

export const HeroPage = () => {
  const { state, dispatch } = useProducts();

  const onClick = async () => {
    try {
      const response = await getProducts({ limit: 25, page: 1 });
      console.log('response', response);
      dispatch({
        type: ProductsActionsTypes.GET_PRODUCTS_SUCCESS,
        payload: response,
      });
      console.log('ProductsState', state);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

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
        onClick={() => {
          onClick();
        }}
      >
        Shop Now
      </Button>
    </Box>
  );
};
