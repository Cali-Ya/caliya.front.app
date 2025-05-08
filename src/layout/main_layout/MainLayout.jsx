//styles
import './MainLayoutStyle.css';

//router-dom
import { Outlet } from 'react-router-dom';
//componentes
import Header from '../../components/Header/Header';
import Products from '../../features/products/pages/product_page/Products';
import Salchipapa from '../../assets/emplatado-final-de-las-salchipapas.jpg';
import hamburgesa from '../../assets/hamburguesa-test.jpg';

const MainLayout = () => {
  const Producto = {
    salchipapa: [
      {
        name: 'Salchipapas simple',
        description: 'Deliciosas salchipapas con salsa de la casa',
        price: 10.99,
        image: Salchipapa,
      },
      {
        name: 'Salchipapa especial',
        description: 'Salchipapa con todo',
        price: 12.99,
        image: Salchipapa,
      },
      {
        name: 'Salchipapa reto D.M.O',
        description: 'Salchipapa con mas de 2mil papas',
        price: 15.99,
        image: Salchipapa,
      },
      {
        name: 'Salchipapa sin papa',
        description: 'Salchipapa con mas de 2mil papas',
        price: 15.99,
        image: Salchipapa,
      },
      {
        name: 'Salchipapa sin salchi',
        description: 'Salchipapa con mas de 2mil papas',
        price: 15.99,
        image: Salchipapa,
      },
    ],
    hamburgesas: [
      {
        name: 'Hamburgesa simple',
        description: 'Deliciosas hamburguesas con salsa de la casa',
        price: 10.99,
        image: hamburgesa,
      },
      {
        name: 'Hamburguesa especial',
        description: 'Hamgurguesa con todo',
        price: 12.99,
        image: hamburgesa,
      },
      {
        name: 'Hamburguesa reto D.M.O',
        description: 'Hamburguesa con mas de 2mil papas',
        price: 15.99,
        image: hamburgesa,
      },
      {
        name: 'Hamburguesa sin burguesa',
        description: 'Hamburguesa con mas de 2mil papas',
        price: 15.99,
        image: hamburgesa,
      },
      {
        name: 'Hamburguesa hambur',
        description: 'Hamburguesa con mas de 2mil papas',
        price: 15.99,
        image: hamburgesa,
      },
    ],
  };
  return (
    <main className="container_main_layout">
      <Header />
      <section className="container_main_layout__content">
        <Products Title="Salchipapas" ProductsList={Producto.salchipapa} />
        <Products Title="Hamburguesas" ProductsList={Producto.hamburgesas} />
      </section>
    </main>
  );
};

export default MainLayout;
