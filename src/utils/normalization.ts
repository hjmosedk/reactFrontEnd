import { Ecommerce } from 'ckh-typings';

export interface NormalizedProduct {
  [key: number]: Ecommerce.ProductModel;
}

export const normalizeProducts = (
  products: Ecommerce.ProductModel[],
): NormalizedProduct => {
  return products.reduce(
    (acc: NormalizedProduct, product: Ecommerce.ProductModel) => {
      acc[product.id] = product;
      return acc;
    },
    {} as NormalizedProduct,
  );
};
