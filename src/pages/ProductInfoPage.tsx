import { ProductCard } from '../components/ProductCard/ProductCard';
import { useParams, useNavigate } from 'react-router';
import { Box, Button } from '@mui/material';
import { useFetchProductById } from '../hooks';

export const ProductInfoPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { product, loading } = useFetchProductById(Number(id));

  return (
    <Box>
      <Button
        color='primary'
        variant='contained'
        size='large'
        sx={{ marginTop: '1rem' }}
        onClick={() => navigate(-1)}
      >
        Go Back?
      </Button>
      {loading && <div>Loading...</div>}

      {!loading && product && (
        <ProductCard
          product={product}
          onClick={() => navigate(`/products/${id}`)}
          singlePage
        />
      )}
    </Box>
  );
};
