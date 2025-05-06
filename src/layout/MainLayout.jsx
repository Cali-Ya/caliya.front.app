import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const MainLayout = () => {
  return (
    <main className="container_main_layout">
      <Header Title="Productos" />
      <Outlet />
    </main>
  );
};

export default MainLayout;
