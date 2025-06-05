import './order_page.css';
import { Outlet, useNavigate } from 'react-router-dom';
import CaretIconLeft from '../../../components/caret_icons/caret_icon_left/CaretIconLeft';
import useIsTogglePage from '../store/useIsTogglePage.store';
import useBuyProduct from '../../stores/store/buy_product.store';

const OrderPage = () => {
  //navigate
  const navigate = useNavigate();

  //products selections
  const { setTogglePageBuyProduct } = useBuyProduct();

  //togle page
  const { togglePage, setTogglePage } = useIsTogglePage();

  //handle return page
  const handleReturnPage = () => {
    navigate('/');
  };

  //vars
  const caretBlack = false;
  return (
    <main className="container_orders">
      <header className="header_cart_store">
        <CaretIconLeft onClick={handleReturnPage} preferColor={caretBlack} />
        <h3 className="header_cart_store__title">Tus ordenes</h3>
      </header>

      <Outlet />
    </main>
  );
};

export default OrderPage;
