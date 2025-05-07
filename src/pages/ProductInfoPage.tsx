import { ProductCard } from '../components/ProductCard/ProductCard';
import { useParams, useNavigate } from 'react-router';
import { Box, Button } from '@mui/material';
import { useGetProductByIdQuery } from '../services/productsService';
import { LoadingSpinner } from '../components/LoadingSpinner/LoadingSpinner';

export const ProductInfoPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: product, isLoading } = useGetProductByIdQuery(Number(id));

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
      {isLoading && <LoadingSpinner />}
      {!isLoading && product && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2rem',
          }}
        >
          <ProductCard product={product} singlePage={true} onClick={() => {}} />
        </Box>
      )}
    </Box>
  );
};
