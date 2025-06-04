//css
import './shopping_cart_icon.css';
//clsx
import clsx from 'clsx';
//global
import useCartStore from '../../../store/cart.store';
//icons
import { MdOutlineShoppingCart } from 'react-icons/md';
//components
import CaretIconRigth from '../../caret_icons/caret_icon_rigth/CaretIconRight';
//const
import { AllPathRoutes } from '../../../const/AllPathRoutes';
//react hooks
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ShoppingCartIcon = ({ isColor = true }) => {
  // cart lenght
  const [cartLenght, setCartLenght] = useState();

  //react router dom
  const navigate = useNavigate();

  //global
  //cart
  const { cart } = useCartStore();
  // Sumar la cantidad total de productos en el carrito
  const cart_length = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cart_clenear = 0;

  useEffect(() => {
    setCartLenght(cart_length);
  }, [cart_length]);

  const handleOpenCartStore = () => {
    navigate(AllPathRoutes.cart);
  };
  return (
    <div
      className={clsx('container_shopping_cart_icon', {
        container_shopping_cart_icon__active: cartLenght,
        container_shopping_cart_icon__desactive: !cartLenght,
      })}
    >
      <MdOutlineShoppingCart
        className="shopping_cart_icon"
        onClick={handleOpenCartStore}
        style={{
          color: isColor
            ? 'var(--active-color-secondary)'
            : 'var(--active-color-white)',
        }}
      />
      {cartLenght !== cart_clenear ? (
        <p className="shopping_cart_icon_lenght">{cartLenght}</p>
      ) : null}
    </div>
  );
};

export default ShoppingCartIcon;
