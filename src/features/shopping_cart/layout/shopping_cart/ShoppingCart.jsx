//css
import './shopping_cart.css';
//components
import {
  ButtonPrimary,
  ButtonSecondary,
} from '../../../../components/button_components/ButttonsComponents';
//custom hooks
import useNumberFormat from '../../../../hooks/useNumberFormat';
import useCartStore from '../../../../store/cart.store';
import usePlaceOrderStore from '../../store/place_order.store';
//assets
import { ilustrations } from '../../../../assets/assets_exports';
//react
import { useNavigate } from 'react-router-dom';
import { preprocessCartItems } from '../../../../lib/shared/cartUtils';

const CartStorePage = () => {
  //global
  //cart store
  const { cart, clearCart, removeItemQuantity, addItem } = useCartStore();
  const { setPlaceOrder } = usePlaceOrderStore();

  //navigate
  const navigate = useNavigate();

  //custom hooks
  const { formatNumber } = useNumberFormat();

  //handle remove all products
  const handleRemoveAllProducts = () => {
    clearCart();
  };

  //handle add direction
  const handlePlaceOrder = (shopId, group) => {
    setPlaceOrder({ shopId, ...group });
    navigate('/cart/add_direction');
  };

  const processedItems = preprocessCartItems(cart);

  // Agrupa usando processedItems en vez de cart
  const groupedByShop = processedItems.reduce((acc, item) => {
    const shopId = item.shopInfo?.id || 'sin-tienda';
    if (!acc[shopId])
      acc[shopId] = {
        shopName: item.shopInfo?.name || 'Sin tienda',
        items: [],
      };
    acc[shopId].items.push(item);
    return acc;
  }, {});

  //vars
  const country = 'es-CO';
  const cartEmpty = 0;

  return (
    <section className="shopping_cart_container">
      {cart.length === cartEmpty ? (
        <div className="empty_shopping_cart_container">
          <img
            src={ilustrations.CarritoIlustration}
            alt={ilustrations.CarritoIlustration}
            className="empty_shopping_cart__img"
          />
          <h1 className="empty_shopping_cart__title">El carrito esta vacio</h1>
          <p className="empty_shopping_cart__description">
            Aqui estaran todos tus pedidos
          </p>
        </div>
      ) : (
        Object.entries(groupedByShop).map(([shopId, group]) => {
          // Calcula el total de la tienda
          const totalShop = group.items.reduce(
            (sum, item) => sum + item.subtotal,
            0
          );
          return (
            <div key={shopId} className="cart_group_by_shop">
              {/* Título con nombre de la tienda */}
              <h3 className="title_shopping_cart">{group.shopName}</h3>

              {/* Lista de productos */}
              <ul className="list_shopping_cart">
                {group.items.map((item, idx) => (
                  <li key={item.id + idx} className="list_item_shopping_cart">
                    {/* details */}
                    <section className="details_list_item_shopping_cart">
                      {/* details */}
                      <article className="content_details_item_shopping_cart">
                        <div className="details__image_and_title_item_shopping_cart">
                          {/* image */}
                          <img
                            src={item.image}
                            alt={item.image}
                            className="details__image_item_shopping_cart"
                          />

                          {/* name */}
                          <h2 className="details__title_item_shopping_cart">
                            {item.name}
                          </h2>
                        </div>

                        <div className="details__quantity_and_subtotal_item_shopping_cart">
                          {/* quantity */}
                          <p className="details__quantity_item_shopping_cart">
                            x{item.quantity}
                          </p>
                          {/* precio unitario del producto */}
                          <p className="subtotal_item_shopping_cart">
                            ${formatNumber(item.price, country)}
                          </p>
                        </div>
                      </article>

                      {/* description */}
                      <p className="description_item_shopping_cart">
                        {item.description}
                      </p>
                    </section>

                    {/* additionals */}
                    {item.additionals.length !== 0 && (
                      <article className="content_additionals_list_item_shopping_cart">
                        <h4 className="title_additionals_list_item_shopping_cart">
                          Adicionales:
                        </h4>
                        {item.additionals.map((additional) => (
                          <ul
                            className="additionals_list_item_shopping_cart"
                            key={additional.id}
                          >
                            <li>{additional.name}:</li>
                            <li className="additionals_list_item_shopping_cart__price">
                              ${formatNumber(additional.price, country)}
                            </li>
                          </ul>
                        ))}
                      </article>
                    )}

                    {/* subtotal */}
                    {/* <div className="subtotal_item_shopping_cart">
                      Subtotal: ${formatNumber(item.subtotal, country)}
                    </div> */}

                    {/* observations */}
                    {item.observation && (
                      <p className="observations_item_shopping_cart">
                        Observaciones: {item.observation}
                      </p>
                    )}

                    {/* actions */}
                    <div className="actions_item_list_shopping_cart">
                      {/* add */}
                      <ButtonPrimary
                        text="Añadir"
                        onClick={() =>
                          addItem({
                            ...item,
                            quantity: 1, // Solo sumar 1 unidad
                          })
                        }
                      />
                      <ButtonSecondary
                        text="Quitar"
                        onClick={() => removeItemQuantity(item)}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              {/* Total de la tienda */}
              <div className="total_shop_section">
                <strong className="total_shop_section__strong">
                  <span>Total: </span>
                  <span>${formatNumber(totalShop, country)}</span>
                </strong>
                <ButtonPrimary
                  text="Hacer pedido"
                  onClick={() => handlePlaceOrder(shopId, group)}
                  className="actions__button_item_shopping_cart"
                />
              </div>
            </div>
          );
        })
      )}

      {/* actions */}
      {cart.length === cartEmpty ? null : (
        <section className="actions_item_shopping_cart">
          <ButtonSecondary
            text="Quitar todo del carrito"
            onClick={handleRemoveAllProducts}
            className="actions__button_item_shopping_cart"
          />
        </section>
      )}
    </section>
  );
};

export default CartStorePage;
