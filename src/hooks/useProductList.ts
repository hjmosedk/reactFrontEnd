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
        });
      }
    },
    [dispatch, limit, page],
  );

  useEffect(() => {
    fetchProducts(limit, page);
  }, [fetchProducts]);

  return { productList, loading, fetchProducts, limit, page, totalPages };
};
