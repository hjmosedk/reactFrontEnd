import { normalizeProducts, ProductList } from './../../utils/normalization';
import { Ecommerce } from 'ckh-typings';

import api from '../api/apiClient';

interface QueryParams {
  limit: number;
  page: number;
}

interface ApiResponse {
  products: Ecommerce.ProductModel[];
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
}

export interface NormalizedApiResponse {
  productsList: ProductList;
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
}

export const getProducts = async (
  params: QueryParams,
): Promise<NormalizedApiResponse> => {
  try {
    const response = await api.get<ApiResponse>('/products', {
      params,
    });

    const { products, page, limit, totalCount, totalPages } = response.data;

    const productsList = normalizeProducts(products);
    return { productsList, page, limit, totalCount, totalPages };
  } catch (error) {
    console.error(
      `Error fetching products (params: ${JSON.stringify(params)})`,
      error,
    );
    throw error;
  }
};
