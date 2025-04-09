import { useProductList } from '../hooks';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { Box, Grid, Stack } from '@mui/material';

export const AllProductsPage = () => {
  const { productList, loading } = useProductList();

  return (
    <Box>
      {loading && <div>Loading...</div>}
      {!loading && productList && (
        <Box>
          <Grid
            container
            spacing={2}
            sx={(theme) => ({
              margin: '0 auto',
              paddingTop: theme.spacing(2),
              paddingBottom: theme.spacing(2),
            })}
          >
            {productList.id.map((id) => (
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
                  <ProductCard product={productList.productList[id]} />
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};
