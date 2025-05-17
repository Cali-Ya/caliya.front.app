import PrimaryButtonComponent from '../../../components/ButtonComponent/ButtonPrimary/PrimaryButtonComponent';
import SecondaryButtonComponent from '../../../components/ButtonComponent/ButtonSecondary/SecondaryButtonComponent';
import CaretIconLeft from '../../../components/caret_icons/caret_icon_left/CaretIconLeft';
import useNavigatePage from '../../../hooks/useNavigatePage';
import useNumberFormat from '../../../hooks/useNumberFormat';
import useCartStore from '../../../store/cart.store';
import useProductSelection from '../../products/store/product_selection.store';
import './cart_store_page.css';

const CartStorePage = () => {
  //global
  //cart store
  const { cart, getTotal, clearCart, removeItemQuantity, addItem } =
    useCartStore();

  //products selections
  const { setCardProductSelection } = useProductSelection;

  //custom hooks
  const handleNavigate = useNavigatePage();
  const { formatNumber } = useNumberFormat();

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
        message += `   Adicionales: ${item.additionals.join(', ')}%0A`;
      }
      if (item.observation) {
        message += `   Observaciones: ${item.observation}%0A`;
      }
      message += `%0A`;
    });

    message += `--------------------%0ATotal: $${getTotal()}`;

    // Número de WhatsApp (código de país + número, sin espacios ni signos)
    const phone = import.meta.env.VITE_PHONE_DMO;
    handleRemoveAllProducts();
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  //vars
  const caretBlack = false;
  const country = 'es-CO';

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
                  {formatNumber(item.price * item.quantity, country)} COP
                </p>
              </section>

              {item.additionals.length !== 0 && (
                <article className="content_additionals_list_item_cart_store">
                  <h4 className="title_additionals_list_item_cart_store">
                    Adicionales:
                  </h4>
                  {item.additionals.map((additionals, index) => (
                    <p className="additionals_list_item_cart_store" key={index}>
                      {additionals}
                    </p>
                  ))}
                </article>
              )}
              {item.observation && (
                <p className="observations_item_cart_store">
                  <strong>Observaciones:</strong> {item.observation}
                </p>
              )}

              <div className="actions_item_list_cart_store">
                <button
                  onClick={() =>
                    addItem({
                      ...item,
                      quantity: 1,
                    })
                  }
                  className="action_add_item_list_cart_store actions_item_list_cart_store"
                >
                  Añadir Otro
                </button>
                <button
                  onClick={() => removeItemQuantity(item)}
                  disabled={item.quantity <= 1}
                  className="action_add_item_list_cart_store actions_item_list_cart_store"
                >
                  Quitar
                </button>
              </div>
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
            <p className="description_total_price_cart_store">
              {formatNumber(getTotal(), country)}
            </p>
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
