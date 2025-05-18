import './order_page.css';
import { Outlet } from 'react-router-dom';
import useProductSelection from '../../products/store/product_selection.store';
import useNavigatePage from '../../../hooks/useNavigatePage';
import CaretIconLeft from '../../../components/caret_icons/caret_icon_left/CaretIconLeft';
import useIsTogglePage from '../store/useIsTogglePage.store';

const OrderPage = () => {
  //products selections
  const { setCardProductSelection } = useProductSelection();

  //custom hooks
  const handleNavigate = useNavigatePage();

  //togle page
  const { togglePage, setTogglePage } = useIsTogglePage();

  //handle return page
  const handleReturnPage = () => {
    const navigate = togglePage ? '/' : '/order';
    const cardProduct = togglePage ? '' : false;

    setCardProductSelection(cardProduct);
    setTogglePage();
    handleNavigate(navigate);
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
