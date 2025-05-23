//css
import './shopping_cart_icon.css';
//icons
import { MdOutlineShoppingCart } from 'react-icons/md';
//global
import useCartStore from '../../store/cart.store';
//const
import { AllPathRoutes } from '../../const/AllPathRoutes';
//react hooks
import { useNavigation } from 'react-router-dom';

const ShoppingCartIcon = ({ isColor = true }) => {
  //globals
  const { cart } = useCartStore();

  //react router dom
  const navigate = useNavigation();

  const handleOpenCartStore = () => {
    const cartLength = 0;
    if (cart.length === cartLength) navigate(AllPathRoutes.cart);
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
