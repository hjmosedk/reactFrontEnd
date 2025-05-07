import { FC } from 'react';

import { ProductCard } from '../ProductCard/ProductCard';

import { Grid, Stack } from '@mui/material';
import { useNavigate } from 'react-router';

import { NormalizedApiResponse } from '../../services/productsService';

interface ProductGridProps {
  Products: NormalizedApiResponse;
}

export const ProductGrid: FC<ProductGridProps> = ({
  Products: { productsList },
}) => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={2}
      sx={(theme) => ({
        margin: '0 auto',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
      })}
    >
      {productsList.id.map((id) => (
        <Grid
          size={12 / 5}
          key={id}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Stack
            spacing={2}
            direction='row'
            sx={{ height: '100%', width: '100%' }}
          >
            <ProductCard
              product={productsList.productList[id]}
              onClick={() => navigate(`/products/${id}`)}
              singlePage={false}
            />
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};
