import './purcharse_data_form.css';
import clsx from 'clsx';
import useCartStore from '../../../../store/cart.store';
import useIsTogglePage from '../../store/useIsTogglePage.store';
import InputComponent from '../../../../components/input_component/InputComponent';
import PrimaryButtonComponent from '../../../../components/button_components/button_primary/PrimaryButtonComponent';
import { useState } from 'react';
import useNavigatePage from '../../../../hooks/useNavigatePage';
import useProductSelection from '../../../stores/store/product_selection.store';

const FormDelevery = () => {
  //global
  //cart store
  const { cart, getTotal, clearCart } = useCartStore();

  //products selections
  const { setCardProductSelection } = useProductSelection();

  //hooks
  const handleNavigate = useNavigatePage();

  //togle page
  const { togglePage } = useIsTogglePage();

  //state
  const [purchaseData, setPurchaseData] = useState({
    buy: '',
    full_name: '',
    whatsapp: '',
    neighborhood: '',
    direction: '',
  });

  //handle remove all products
  const handleRemoveAllProducts = () => {
    clearCart();
    setCardProductSelection(false);
    handleNavigate('/');
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
  const handleSendWhatsApp = () => {
    if (cart.length === 0) return;

    let message = '¡Hola! Quiero hacer el siguiente pedido:%0A%0A';

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

    message += `--------------------%0ATotal: $${getTotal()}%0A%0A`;
    message += `Datos de compra:%0A%0A`;
    if (purchaseData.buy) message += `Pago con: ${purchaseData.buy}%0A`;
    if (purchaseData.full_name)
      message += `Nombre: ${purchaseData.full_name}%0A`;
    if (purchaseData.whatsapp)
      message += `Whatsapp: ${purchaseData.whatsapp}%0A`;
    if (purchaseData.direction)
      message += `Dirección: ${purchaseData.direction}%0A`;
    if (purchaseData.neighborhood)
      message += `Barrio: ${purchaseData.neighborhood}%0A`;

    // Número de WhatsApp (código de país + número, sin espacios ni signos)
    const phone = import.meta.env.VITE_PHONE_DMO;
    handleRemoveAllProducts();
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <form
      className={clsx('form_delevery', {
        'form_devery--open': togglePage,
        'form_devery--close': !togglePage,
      })}
    >
      <header className="form_header">
        <h2>Escribe tu Dirección</h2>
      </header>

      <InputComponent
        placeholder=""
        label="Pago con: 20mil"
        id="buy"
        onChange={handleInputChange}
        value={purchaseData.buy}
      />
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

      <PrimaryButtonComponent
        onClick={handleSendWhatsApp}
        text="Enviar Pedido"
      />
    </form>
  );
};

export default FormDelevery;
