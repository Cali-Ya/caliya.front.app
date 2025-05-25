import './order_page.css';
import { Outlet, useNavigate } from 'react-router-dom';
import useProductSelection from '../../stores/store/product_selection.store';
import CaretIconLeft from '../../../components/caret_icons/caret_icon_left/CaretIconLeft';
import useIsTogglePage from '../store/useIsTogglePage.store';

const OrderPage = () => {
  //products selections
  const { setCardProductSelection } = useProductSelection();

  //navigate
  const navigate = useNavigate();

  //togle page
  const { togglePage, setTogglePage } = useIsTogglePage();

  //handle return page
  const handleReturnPage = () => {
    const navigate = togglePage ? '/' : '/order';
    const cardProduct = togglePage ? '' : false;

    setCardProductSelection(cardProduct);
    setTogglePage();
    navigate(navigate);
  };

  //vars
  const caretBlack = false;
  return (
    <main className="container_orders">
      <header className="header_cart_store">
        <CaretIconLeft onClick={handleReturnPage} preferColor={caretBlack} />
        <h3 className="header_title_cart_store">Tus ordenes</h3>
      </header>

      <Outlet />
    </main>
  );
};

export default OrderPage;
