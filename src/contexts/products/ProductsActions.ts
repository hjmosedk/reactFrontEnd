import { NormalizedApiResponse } from '../../services/productsService';

export enum ProductsActionsTypes {
  GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST',
  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE',
  GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST',
  GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS',
  GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE',
}

interface ProductsPayload extends NormalizedApiResponse {
  error?: string;
}

export interface ProductsActions {
  type: ProductsActionsTypes;
  payload?: ProductsPayload;
}
