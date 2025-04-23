import { useEffect, useCallback } from 'react';
import { useProducts } from '../contexts/products/ProductsContext';
import { ProductsActionsTypes } from '../contexts/products/ProductsActions';
import { getProducts } from '../services/productsService';

export const useProductList = () => {
  const {
    products: { productList, limit, page, loading, totalPages },
    dispatch,
  } = useProducts();

  const fetchProducts = useCallback(
    async (functionLimit: number, functionPage: number) => {
      try {
        dispatch({ type: ProductsActionsTypes.GET_PRODUCTS_REQUEST });
        const response = await getProducts({
          limit: functionLimit,
          page: functionPage,
        });
        dispatch({
          type: ProductsActionsTypes.GET_PRODUCTS_SUCCESS,
          payload: response,
        });
      } catch (error) {
        dispatch({
          type: ProductsActionsTypes.GET_PRODUCTS_FAILURE,
          payload: { error: (error as Error).message },
        });
      }
    },
    [dispatch],
  );

  useEffect(() => {
    fetchProducts(limit, page);
  }, [limit, page]);

  return {
    productList,
    loading,
    fetchProducts,
    limit,
    page,
    totalPages,
  };
};
