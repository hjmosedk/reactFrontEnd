import { ProductsState } from './ProductsContext';
import { ProductsActions, ProductsActionsTypes } from './ProductsActions';

export const productsReducer = (
  state: ProductsState,
  action: ProductsActions,
): ProductsState => {
  switch (action.type) {
    case ProductsActionsTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ProductsActionsTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        productList: action.payload
          ?.productsList as ProductsState['productList'],
        page: action.payload?.page as ProductsState['page'],
        limit: action.payload?.limit as ProductsState['limit'],
        totalCount: action.payload?.totalCount as ProductsState['totalCount'],
        totalPages: action.payload?.totalPages as ProductsState['totalPages'],
        error: null,
      };

    case ProductsActionsTypes.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload?.error as ProductsState['error'],
      };

    case ProductsActionsTypes.SET_PAGE:
      return {
        ...state,
        page: action.payload?.page as ProductsState['page'],
      };
    case ProductsActionsTypes.SET_LIMIT:
      return {
        ...state,
        limit: action.payload?.limit as ProductsState['limit'],
      };
    default:
      return state;
  }
};
