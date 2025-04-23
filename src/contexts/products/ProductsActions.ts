import { NormalizedApiResponse } from '../../services/productsService';

export enum ProductsActionsTypes {
  GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST',
  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE',
  GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST',
  GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS',
  GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE',
  SET_PAGE = 'SET_PAGE',
  SET_LIMIT = 'SET_LIMIT',
}

interface GetProductsSuccessPayload extends NormalizedApiResponse {
  error?: string;
}

export type ProductsActions =
  | { type: ProductsActionsTypes.GET_PRODUCTS_REQUEST }
  | {
      type: ProductsActionsTypes.GET_PRODUCTS_SUCCESS;
      payload: GetProductsSuccessPayload;
    }
  | {
      type: ProductsActionsTypes.GET_PRODUCTS_FAILURE;
      payload: { error: string };
    }
  | { type: ProductsActionsTypes.SET_PAGE; payload: { page: number } }
  | { type: ProductsActionsTypes.SET_LIMIT; payload: { limit: number } };
