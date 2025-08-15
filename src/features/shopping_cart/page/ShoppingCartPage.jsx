//css
import './shopping_cart_page.css';
//icons
import CaretIconLeft from '../../../components/caret_icons/caret_icon_left/CaretIconLeft';
import IconHome from '../../../components/icons/home_icon/IconHome';
//components
import ShoppingCart from '../layout/shopping_cart/ShoppingCart';
//react
import { useNavigate } from 'react-router-dom';

const ShoppingCartPage = () => {
  //navigate
  const navigate = useNavigate();

  //handle return page
  const handleReturnPage = () => {
    navigate(-1);
  };

  //vars
  const caretBlack = false;
  return (
    <main className="container_shopping_cart_page">
      <header className="header_cart_store">
        <CaretIconLeft onClick={handleReturnPage} preferColor={caretBlack} />
        <IconHome />
      </header>

      <section>
        <ShoppingCart />
      </section>
    </main>
  );
};

export default ShoppingCartPage;
