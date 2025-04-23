import { useEffect, useState } from 'react';
import { Ecommerce } from 'ckh-typings';
import { getProductById } from '../services/productsService';

export const useFetchProductById = (id: number) => {
  const [product, setProduct] = useState<Ecommerce.ProductModel | null>(null);
  const [loading, setLoading] = useState(true);
  const fetchProduct = async () => {
    try {
      const product = await getProductById(Number(id));
      setProduct(product);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [id]);

  return {
    product,
    loading,
  };
};
