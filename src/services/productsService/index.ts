import { normalizeProducts, ProductList } from './../../utils/normalization';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Ecommerce } from 'ckh-typings';

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

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<NormalizedApiResponse, QueryParams>({
      query: (params) => ({
        url: '/products',
        params,
      }),
      transformResponse: (response: ApiResponse) => {
        const { products, page, limit, totalCount, totalPages } = response;
        const productsList = normalizeProducts(products);
        return { productsList, page, limit, totalCount, totalPages };
      },
    }),
    getProductById: builder.query<Ecommerce.ProductModel, number>({
      query: (id) => `/products/${id}`,
      transformResponse: (response: Ecommerce.ProductModel) => {
        return response;
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
