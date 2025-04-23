import { ChangeEvent, useState, useEffect } from 'react';
import { useProductList } from '../hooks';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { PaginationComponent } from '../components/Pagination/Pagination';
import { Box, Grid, Stack, SelectChangeEvent } from '@mui/material';
import { useNavigate } from 'react-router';

export const AllProductsPage = () => {
  const {
    productList,
    loading,
    limit: ApiLimit,
    page: ApiPage,
    totalPages,
    fetchProducts,
  } = useProductList();
  const [limit, setLimit] = useState(ApiLimit);
  const [page, setPage] = useState(ApiPage);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts(limit, page);
  }, [limit, page]);

  const handleLimitChange = (event: SelectChangeEvent) => {
    setLimit(parseInt(event.target.value));
    setPage(1);
  };

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box>
      {loading && <div>Loading...</div>}
      {!loading && productList && (
        <Box>
          <PaginationComponent
            page={page}
            totalPages={totalPages}
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
                  <ProductCard
                    product={productList.productList[id]}
                    onClick={() => navigate(`/products/${id}`)}
                    singlePage={false}
                  />
                </Stack>
              </Grid>
            ))}
          </Grid>
          <PaginationComponent
            page={page}
            totalPages={totalPages}
            limit={limit}
            handleLimitChange={handleLimitChange}
            handlePageChange={handlePageChange}
          />
        </Box>
      )}
    </Box>
  );
};
