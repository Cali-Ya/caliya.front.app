//css
import './shopping_cart_icon.css';
//icons
import { MdOutlineShoppingCart } from 'react-icons/md';
//const
import { AllPathRoutes } from '../../const/AllPathRoutes';
//react hooks
import { useNavigate } from 'react-router-dom';

const ShoppingCartIcon = ({ isColor = true }) => {
  //react router dom
  const navigate = useNavigate();

  const handleOpenCartStore = () => {
    navigate(AllPathRoutes.cart);
  };
  return (
    <MdOutlineShoppingCart
      className="shopping_cart_icon"
      onClick={handleOpenCartStore}
      style={{
        color: isColor
          ? 'var(--active-color-secondary)'
          : 'var(--active-color-white)',
      }}
    />
  );
};

export default ShoppingCartIcon;
