//styles
import './MainLayoutStyle.css';

//router-dom
import { Outlet } from 'react-router-dom';
//componentes
import Header from '../../components/header/Header';
import Products from '../../features/products/pages/product_page/Products';
import Salchipapa from '../../assets/emplatado-final-de-las-salchipapas.jpg';
import hamburgesa from '../../assets/hamburguesa-test.jpg';
import { useEffect, useState } from 'react';
import { fecthProducts } from '../../features/products/api/products_api';

const MainLayout = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fecthProducts(setProducts);
  }, []);

  return (
    <main className="container_main_layout">
      <Header />
      <section className="container_main_layout__content">
        {products
          .filter(
            (category) =>
              Array.isArray(category.items) && category.items.length > 0
          )
          .map((categories) => (
            <>
              <Products
                Title={categories.name}
                ProductsList={categories.items}
                key={categories.name}
              />
            </>
          ))}
      </section>
    </main>
  );
};

export default MainLayout;
