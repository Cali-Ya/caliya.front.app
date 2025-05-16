//styles
import './main_layout.css';

//componentes
import Header from '../../layout/header/Header';
import { Outlet } from 'react-router-dom';
import useProductSelection from '../../features/products/store/product_selection.store';

const MainLayout = () => {
  //global
  const { productSelection } = useProductSelection();

  return (
    <main
      className="container_main_layout"
      style={{
        overflow: productSelection ? 'hidden' : 'auto',
      }}
    >
      <Header />
      <Outlet />
    </main>
  );
};

export default MainLayout;
