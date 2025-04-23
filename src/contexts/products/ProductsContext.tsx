import {
  createContext,
  useContext,
  FC,
  PropsWithChildren,
  Dispatch,
  useReducer,
} from 'react';

import { NormalizedProduct } from '../../utils/normalization';
import { ProductsActions } from './ProductsActions';
import { productsReducer } from './ProductsReducer';

export interface ProductsState {
  productList: { id: number[]; productList: NormalizedProduct } | null;
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
  error: string | null;
  loading: boolean;
}

const initialState: ProductsState = {
  productList: null,
  page: 1,
  limit: 25,
  totalCount: 0,
  totalPages: 0,
  error: null,
  loading: false,
};

const ProductsContext = createContext<
  { products: ProductsState; dispatch: Dispatch<ProductsActions> } | undefined
>(undefined);

export const ProductsProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [products, dispatch] = useReducer(productsReducer, initialState);

  return (
    <ProductsContext.Provider
      value={{
        products,
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
