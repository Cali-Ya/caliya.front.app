import './products_page.css';
import useFetchProducts from '../../store/fetch_products.store';
import { useEffect } from 'react';
import ProductCategory from '../../../products/layout/product_category/ProductCategory';

const ProductsPage = () => {
  const { products, getProducts } = useFetchProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return products?.categories ? (
    products.categories.map((categories) => (
      <ProductCategory
        title={categories.name}
        products={categories.items}
        key={categories.name}
      />
    ))
  ) : (
    <div>Cargando productos</div>
  );
};

export default ProductsPage;
