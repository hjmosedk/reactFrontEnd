import { Ecommerce } from 'ckh-typings';

export interface NormalizedProduct {
  [key: number]: Ecommerce.ProductModel;
}

export interface ProductList {
  id: number[];
  productList: NormalizedProduct;
}

export const normalizeProducts = (
  products: Ecommerce.ProductModel[],
): ProductList => {
  const id = products.map((product) => product.id);
  const productList = products.reduce(
    (acc: NormalizedProduct, product: Ecommerce.ProductModel) => {
      acc[product.id] = product;
      return acc;
    },
    {} as NormalizedProduct,
  );

  return {
    id,
    productList,
  };
};
