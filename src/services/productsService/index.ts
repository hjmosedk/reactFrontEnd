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
  tagTypes: ['Products', 'AllProducts'],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<NormalizedApiResponse, QueryParams>({
      providesTags: (_result, _error) => [{ type: 'Products' }],
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
    updateProductStatus: builder.mutation<Ecommerce.ProductModel, number>({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'POST',
      }),
      invalidatesTags: (_result, _error) => [{ type: 'AllProducts' }],
    }),
    getAllProducts: builder.query<NormalizedApiResponse, QueryParams>({
      providesTags: (_result, _error) => [{ type: 'AllProducts' }],
      query: (params) => ({
        url: '/products/all',
        params,
      }),
      transformResponse: (response: ApiResponse) => {
        const { products, page, limit, totalCount, totalPages } = response;
        const productsList = normalizeProducts(products);
        return { productsList, page, limit, totalCount, totalPages };
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useUpdateProductStatusMutation,
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
  useLazyGetProductsQuery,
} = productsApi;
