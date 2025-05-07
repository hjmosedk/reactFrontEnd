import { ChangeEvent, useState, FC } from 'react';
import { useGetProductsQuery } from '../services/productsService';
import { PaginationComponent } from '../components/Pagination/Pagination';
import { Box, SelectChangeEvent, Typography } from '@mui/material';
import { LoadingSpinner } from '../components/LoadingSpinner/LoadingSpinner';
import { ProductGrid } from '../components/ProductGrid/ProductGrid';

export enum DisplayMode {
  GRID = 'grid',
  LIST = 'list',
}

interface AllProductsPageProps {
  displayMode: DisplayMode;
}

export const AllProductsPage: FC<AllProductsPageProps> = ({ displayMode }) => {
  const [limit, setLimit] = useState(25);
  const [page, setPage] = useState(1);
  const { data: products, isLoading } = useGetProductsQuery({
    limit,
    page,
  });

  const handleLimitChange = (event: SelectChangeEvent) => {
    setLimit(parseInt(event.target.value));
    setPage(1);
  };

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box>
      {isLoading && <LoadingSpinner />}

      {!isLoading && products && (
        <Box>
          <PaginationComponent
            page={page}
            totalPages={products.totalPages}
            limit={limit}
            handleLimitChange={handleLimitChange}
            handlePageChange={handlePageChange}
          />
          {displayMode === DisplayMode.GRID && (
            <ProductGrid Products={products} />
          )}
          {displayMode === DisplayMode.LIST && (
            <Typography>This is the display list</Typography>
          )}
          <PaginationComponent
            page={page}
            totalPages={products.totalPages}
            limit={limit}
            handleLimitChange={handleLimitChange}
            handlePageChange={handlePageChange}
          />
        </Box>
      )}
    </Box>
  );
};
