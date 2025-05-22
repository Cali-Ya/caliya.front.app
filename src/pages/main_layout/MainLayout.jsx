//styles
import './main_layout.css';

//componentes
import Header from '../../layout/header/Header';
import { Outlet } from 'react-router-dom';
import useProductSelection from '../../features/products/store/product_selection.store';

//icons
import { FaShoppingCart } from 'react-icons/fa';
import useCartStore from '../../store/cart.store';

const MainLayout = () => {
  //global
  const { productSelection } = useProductSelection();

  const { cart } = useCartStore();

  //hooks

  const handleIconCart = () => {};

  return (
    <main
      className="container_main_layout"
      style={{
        overflow: productSelection ? 'hidden' : 'auto',
      }}
    >
      <Header />
      <Outlet />

      {cart.length > 0 && (
        <aside className="container_icon_cart">
          <FaShoppingCart className="icon_cart" onClick={handleIconCart} />
        </aside>
      )}
    </main>
  );
};

export default MainLayout;
