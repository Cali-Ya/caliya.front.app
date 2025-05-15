//styles
import './MainLayoutStyle.css';

//componentes
import Header from '../../components/header/Header';
import Products from '../../features/products/pages/product_page/Products';
import { useEffect, useState } from 'react';
import { fecthProducts } from '../../features/products/api/products_api';
import ProductSelection from '../../features/products/components/product_selection/ProductSelection';

const MainLayout = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fecthProducts(setProducts);
  }, []);

  return (
    <main className="container_main_layout">
      <Header />
      {/* <ProductSelection /> */}
      <section className="container_main_layout__content">
        {products &&
          products.categories
            .filter(
              (category) =>
                Array.isArray(category.items) && category.items.length > 0
            )
            .map((categories) => (
              <Products
                Title={categories.name}
                ProductsList={categories.items}
                key={categories.name}
              />
            ))}
      </section>
    </main>
  );
};

export default MainLayout;
