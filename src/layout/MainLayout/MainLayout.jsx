//styles
import './MainLayoutStyle.css';

//router-dom
import { Outlet } from 'react-router-dom';
//componentes
import Header from '../../components/Header/Header';
import Products from '../../pages/Products/Products';
import Salchipapa from '../../assets/emplatado-final-de-las-salchipapas.jpg';

const MainLayout = () => {
  const Producto = [
    {
      name: 'Salchipapas',
      description: 'Deliciosas salchipapas con salsa de la casa',
      price: 10.99,
      image: Salchipapa,
    },
    {
      name: 'Hamburguesa',
      description: 'Jugosa hamburguesa con queso y tocino',
      price: 12.99,
      image: Salchipapa,
    },
    {
      name: 'Pizza',
      description: 'Pizza de pepperoni con extra de queso',
      price: 15.99,
      image: Salchipapa,
    },
  ];

  return (
    <main className="container_main_layout">
      <Header />
      <section className="container_main_layout__content">
        <Products Title="Salchipapas" ProductList={Producto} />
      </section>
    </main>
  );
};

export default MainLayout;
