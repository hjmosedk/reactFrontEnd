import { useEffect, useCallback } from 'react';
import { useProducts } from '../contexts/products/ProductsContext';
import { ProductsActionsTypes } from '../contexts/products/ProductsActions';
import { getProducts } from '../services/productsService';

export const useProductList = () => {
  const {
    products: { productList, limit, page, loading },
    dispatch,
  } = useProducts();

  const fetchProducts = useCallback(async () => {
    try {
      dispatch({ type: ProductsActionsTypes.GET_PRODUCTS_REQUEST });
      const response = await getProducts({ limit, page });
      dispatch({
        type: ProductsActionsTypes.GET_PRODUCTS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: ProductsActionsTypes.GET_PRODUCTS_FAILURE,
      });
    }
  }, [dispatch, limit, page]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { productList, loading, limit, page, fetchProducts };
};
