import {
  createContext,
  useContext,
  FC,
  PropsWithChildren,
  Dispatch,
  useReducer,
} from 'react';

import { NormalizedProduct } from '../../utils/normalization';
import { Ecommerce } from 'ckh-typings';
import { ProductsActions } from './ProductsActions';
import { productsReducer } from './ProductsReducer';

export interface ProductsState {
  productList: NormalizedProduct | null;
  selectedProduct: Ecommerce.ProductModel | null;
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
  error: string | null;
  loading: boolean;
}

const initialState: ProductsState = {
  productList: null,
  selectedProduct: null,
  page: 1,
  limit: 25,
  totalCount: 0,
  totalPages: 0,
  error: null,
  loading: false,
};

const ProductsContext = createContext<
  { state: ProductsState; dispatch: Dispatch<ProductsActions> } | undefined
>(undefined);

export const ProductsProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  return (
    <ProductsContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};
