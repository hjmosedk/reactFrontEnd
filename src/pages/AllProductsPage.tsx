import { ChangeEvent, useState } from 'react';
import { useGetProductsQuery } from '../services/productsService';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { PaginationComponent } from '../components/Pagination/Pagination';
import { Box, Grid, Stack, SelectChangeEvent } from '@mui/material';
import { useNavigate } from 'react-router';

export const AllProductsPage = () => {
  const [limit, setLimit] = useState(25);
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetProductsQuery({
    limit,
    page,
  });

  const navigate = useNavigate();

  const handleLimitChange = (event: SelectChangeEvent) => {
    setLimit(parseInt(event.target.value));
    setPage(1);
  };

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box>
      {isLoading && <div>Loading...</div>}
      {!isLoading && data && (
        <Box>
          <PaginationComponent
            page={page}
            totalPages={data.totalPages}
            limit={limit}
            handleLimitChange={handleLimitChange}
            handlePageChange={handlePageChange}
          />
          <Grid
            container
            spacing={2}
            sx={(theme) => ({
              margin: '0 auto',
              paddingTop: theme.spacing(2),
              paddingBottom: theme.spacing(2),
            })}
          >
            {data.productsList.id.map((id) => (
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
                    product={data.productsList.productList[id]}
                    onClick={() => navigate(`/products/${id}`)}
                    singlePage={false}
                  />
                </Stack>
              </Grid>
            ))}
          </Grid>
          <PaginationComponent
            page={page}
            totalPages={data.totalPages}
            limit={limit}
            handleLimitChange={handleLimitChange}
            handlePageChange={handlePageChange}
          />
        </Box>
      )}
    </Box>
  );
};
