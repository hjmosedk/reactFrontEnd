import { ChangeEvent, useState, FC, useEffect } from 'react';
import {
  useLazyGetProductsQuery,
  useLazyGetAllProductsQuery,
} from '../services/productsService';
import { PaginationComponent } from '../components/Pagination/Pagination';
import { Box, SelectChangeEvent } from '@mui/material';
import { LoadingSpinner } from '../components/LoadingSpinner/LoadingSpinner';
import { ProductGrid } from '../components/ProductGrid/ProductGrid';
import { ProductTable } from '../components/ProductTable/ProductTable';
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
  const [refetchAllProducts, setRefetchAllProducts] = useState(false);

  const [getProducts, { data: products, isLoading }] =
    useLazyGetProductsQuery();

  const [
    getAllProducts,
    { data: allProducts, isLoading: isAllProductsLoading },
  ] = useLazyGetAllProductsQuery();

  useEffect(() => {
    if (products && page > products?.totalPages) {
      getProducts({ limit, page: 1 });
    }

    if (displayMode === DisplayMode.GRID) {
      getProducts({ limit, page });
    }
  }, [page]);

  useEffect(() => {
    if (displayMode === DisplayMode.LIST) {
      getAllProducts({ limit, page });
    }
  }, [displayMode, limit, page]);

  useEffect(() => {
    if (displayMode === DisplayMode.LIST && refetchAllProducts) {
      getAllProducts({ limit, page });
      setRefetchAllProducts(false);
    }
  }, [displayMode, refetchAllProducts]);

  const handleLimitChange = (event: SelectChangeEvent) => {
    setLimit(parseInt(event.target.value));
    setPage(1);
  };

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box>
      {(isLoading || isAllProductsLoading) && <LoadingSpinner />}

      {!isLoading && !isAllProductsLoading && products && (
        <Box>
          <PaginationComponent
            page={page}
            totalPages={
              displayMode === DisplayMode.LIST
                ? allProducts?.totalPages ?? 2
                : products?.totalPages
            }
            limit={limit}
            handleLimitChange={handleLimitChange}
            handlePageChange={handlePageChange}
          />
          {displayMode === DisplayMode.GRID && (
            <ProductGrid Products={products} />
          )}
          {displayMode === DisplayMode.LIST && allProducts && (
            <ProductTable
              Products={allProducts}
              setRefetchAllProducts={setRefetchAllProducts}
            />
          )}
          <PaginationComponent
            page={page}
            totalPages={
              displayMode === DisplayMode.LIST
                ? allProducts?.totalPages ?? 2
                : products?.totalPages
            }
            limit={limit}
            handleLimitChange={handleLimitChange}
            handlePageChange={handlePageChange}
          />
        </Box>
      )}
    </Box>
  );
};
