import PrimaryButtonComponent from '../../../components/ButtonComponent/ButtonPrimary/PrimaryButtonComponent';
import SecondaryButtonComponent from '../../../components/ButtonComponent/ButtonSecondary/SecondaryButtonComponent';
import CaretIconLeft from '../../../components/caret_icons/caret_icon_left/CaretIconLeft';
import useNavigatePage from '../../../hooks/useNavigatePage';
import useCartStore from '../../../store/cart.store';
import useProductSelection from '../../products/store/product_selection.store';
import './cart_store_page.css';

const CartStorePage = () => {
  //global
  //cart store
  const { cart, getTotal, clearCart } = useCartStore();

  //products selections
  const { setCardProductSelection } = useProductSelection;

  //custom hooks
  const handleNavigate = useNavigatePage();

  //total products in cart
  const totalQuantity = cart.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  //handle return page
  const handleReturnPage = () => {
    handleNavigate('/');
    setCardProductSelection(false);
  };

  //handle remove all products
  const handleRemoveAllProducts = () => {
    clearCart();
  };

  //handle send whastapp
  const handleSendWhatsApp = () => {
    if (cart.length === 0) return;

    let message = '¡Hola! Quiero hacer el siguiente pedido:%0A';
    cart.forEach((item) => {
      message += `• ${item.name} x${item.quantity} - $${
        item.price * item.quantity
      }%0A`;
      if (item.additionals && item.additionals.length > 0) {
        item.additionals.forEach((ad, idx) => {
          message += `   - Adicional ${idx + 1}: ${ad.additional}%0A`;
        });
      }
      message += `%0A`;
    });
    message += `--------------------%0ATotal: $${getTotal()}`;

    // Número de WhatsApp (código de país + número, sin espacios ni signos)
    const phone = import.meta.env.VITE_PHONE_DMO; // Cambia este número por el tuyo

    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  //vars
  const caretBlack = false;

  return (
    <section className="cart_store_container">
      <header className="header_cart_store">
        <CaretIconLeft onClick={handleReturnPage} preferColor={caretBlack} />
        <h3 className="header_title_cart_store">Tus ordenes</h3>
      </header>

      {cart.length === 0 ? (
        <p>El carrito esta vacio</p>
      ) : (
        <ul className="list_cart_store">
          {cart.map((item) => (
            <li key={item.id} className="list_item_cart_store">
              {/* total details */}
              <section className="total_details_list_item_cart_store">
                <p className="quantity_item_cart_store">{item.quantity}</p>

                <article className="description_product_details_item_cart_store">
                  <h2 className="title_item_cart_store">{item.name}</h2>
                  <p className="description_item_cart_store">
                    {item.description}
                  </p>
                </article>
                <p className="subtotal_item_cart_store">
                  {item.price * item.quantity}
                </p>
              </section>

              {/* actions */}
              {/*   <div className="actions_list_item_cart_store">
                <PrimaryButtonComponent
                  onClick={() => addItem(item)}
                  text="Añadir"
                />
                <SecondaryButtonComponent
                  onClick={() => removeProductList(item)}
                  text="Eliminar"
                />
              </div> */}
            </li>
          ))}
        </ul>
      )}

      {/* total price */}
      <section className="container_total_price_cart_store">
        {/* container total price */}
        <article className="total_price_cart_store">
          <div className="content_total_price_cart_store">
            <p className="title_total_price_cart_store">Total</p>
            <p className="description_total_price_cart_store">{getTotal()}</p>
          </div>

          {/* total quantity */}
          <div className="total_quantity_products_cart_store">
            <p className="title_total_quantity_products_cart_store">
              Cantidad Total
            </p>
            <p className="description_total_quantity_price_cart_store">
              {totalQuantity}
            </p>
          </div>
        </article>
      </section>

      {/* actions */}
      <section className="actions_cart_store_page">
        <PrimaryButtonComponent text="Enviar" onClick={handleSendWhatsApp} />
        <SecondaryButtonComponent
          text="Quitar todo de la lista"
          onClick={handleRemoveAllProducts}
        />
      </section>
    </section>
  );
};

export default CartStorePage;
