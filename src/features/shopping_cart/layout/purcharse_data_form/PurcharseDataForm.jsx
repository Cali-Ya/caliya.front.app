//css
import './purcharse_data_form.css';
//components
import InputComponent from '../../../../components/input_component/InputComponent';
import PrimaryButtonComponent from '../../../../components/button_components/button_primary/PrimaryButtonComponent';
import CaretIconLeft from '../../../../components/caret_icons/caret_icon_left/CaretIconLeft';
//custom hooks
import useCartStore from '../../../../store/cart.store';
import usePlaceOrderStore from '../../store/place_order.store';
import useNumberFormat from '../../../../hooks/useNumberFormat';
//react
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buildWhatsAppMessage } from '../../../../lib/shared/buildWhatsappMessageOrder';
import { preprocessCartItems } from '../../../../lib/shared/cartUtils';
import CardErrorMessage from '../../../../components/errors_messages/card_error_message/CardErrorMessage';

const FormDelevery = () => {
  //global
  //cart store
  const { cart, removeShopItems } = useCartStore();

  //products selections
  const { placeOrder, clearPlaceOrder } = usePlaceOrderStore();

  //navigate
  const navigate = useNavigate();

  //state
  const [purchaseData, setPurchaseData] = useState({
    full_name: '',
    whatsapp: '',
    neighborhood: '',
    direction: '',
  });

  // Check if all fields in purchaseData are filled
  const isPurchaseDataComplete = Object.values(purchaseData).every(
    (value) => value && value.trim() !== ''
  );

  //Si hay un pedido en curso, usa solo esos productos
  const items = placeOrder ? placeOrder.items : cart;
  const shopName = placeOrder ? placeOrder.shopName : '';

  //handle remove all products
  const ReturnCart = () => {
    const updatedCart = useCartStore.getState().cart;
    if (updatedCart.length === 0) {
      navigate('/');
    } else {
      navigate('/cart');
    }
  };

  // handle input changue
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setPurchaseData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  //handle send whastapp

  const processedItems = preprocessCartItems(items);

  const handleSendWhatsApp = () => {
    const message = buildWhatsAppMessage(
      processedItems,
      shopName,
      purchaseData,
      formatNumber
    );

    const phone = import.meta.env.VITE_PHONE_DMO;

    // Vacía solo los productos de la tienda actual
    if (placeOrder?.shopId) {
      removeShopItems(placeOrder.shopId);
    }

    ReturnCart();
    clearPlaceOrder();
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const { formatNumber } = useNumberFormat();

  //handle return page
  const handleReturnPage = () => {
    navigate(-1);
  };

  //vars
  const caretBlack = false;
  const error_message =
    'Por favor, completa todos los campos antes de enviar el pedido.';

  return (
    <section className="container_place_order">
      <form className="form_delevery">
        <header className="form_header">
          <CaretIconLeft onClick={handleReturnPage} preferColor={caretBlack} />
          <h2 className="form_header__title">Escribe tu Dirección</h2>
        </header>
        <InputComponent
          placeholder=""
          label="Nombre Completo"
          id="full_name"
          onChange={handleInputChange}
          value={purchaseData.full_name}
        />
        <InputComponent
          placeholder=""
          label="Whatsapp"
          id="whatsapp"
          onChange={handleInputChange}
          value={purchaseData.whatsapp}
        />
        <InputComponent
          placeholder=""
          label="Barrio"
          id="neighborhood"
          onChange={handleInputChange}
          value={purchaseData.neighborhood}
        />
        <InputComponent
          placeholder=""
          label="Dirreción"
          id="direction"
          onChange={handleInputChange}
          value={purchaseData.direction}
        />
      </form>

      <div className="order_sumary">
        <h3 className="order_sumary__title">Resumen de tu pedido</h3>
        <ul className="order_sumary__list">
          {processedItems.map((item, idx) => (
            <li key={item.id + '-' + idx} className="order_sumary__item">
              {/* image and name */}
              <article className="order_sumary__content_details">
                <img
                  src={item.image}
                  alt={item.image}
                  className="order_sumary__item-image"
                />

                <div className="order_sumary__content_details_text">
                  {/*name */}
                  <span className="order_sumary__item-name">{item.name}</span>

                  {/* observations */}
                  <span className="order_sumary__item-observation">
                    {item.observation &&
                      `Observaciones: 
                  ${item.observation}`}
                  </span>

                  {/* additionals */}
                  <span className="order_sumary__item-additionals">
                    {item.additionals &&
                      item.additionals.length > 0 &&
                      `Adicionales: 
                  ${item.additionals.map((a) => a.name).join(', ')}`}
                  </span>
                </div>
              </article>

              {/* quantity and price */}
              <div className="order_sumary__content_quantity_and_price">
                <span className="order_sumary__item-quantity">
                  x{item.quantity}
                </span>
                <span className="order_sumary__item-price">
                  ${formatNumber(item.subtotal, 'es-CO')}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div className="order_sumary__total">
          Total: $
          {formatNumber(
            processedItems.reduce((sum, item) => sum + item.subtotal, 0),
            'es-CO'
          )}
        </div>
      </div>

      <PrimaryButtonComponent
        onClick={handleSendWhatsApp}
        text="Enviar Pedido"
        disabled={!isPurchaseDataComplete}
      />

      {isPurchaseDataComplete ? null : (
        <CardErrorMessage error_message={error_message} />
      )}
    </section>
  );
};

export default FormDelevery;
