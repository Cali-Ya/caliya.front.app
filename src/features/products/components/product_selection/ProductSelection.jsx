//css
import './product_selection.css';

import useProductSelection from '../../store/product_selection.store';
import clsx from 'clsx';
import DetailsProductCard from '../details_product_card/DetailsProductCard';
import PrimaryButtonComponent from '../../../../components/ButtonComponent/ButtonPrimary/PrimaryButtonComponent';
import SecondaryButtonComponent from '../../../../components/ButtonComponent/ButtonSecondary/SecondaryButtonComponent';
import InputComponent from '../../../../components/InputComponent/InputComponent';
import useNavigatePage from '../../../../hooks/useNavigatePage';
import { useEffect, useState } from 'react';
import useCartStore from '../../../../store/cart.store';
import CaretIconLeft from '../../../../components/caret_icons/caret_icon_left/CaretIconLeft';
import useNumberFormat from '../../../../hooks/useNumberFormat';

const ProductSelection = () => {
  //custom hooks
  const { formatNumber } = useNumberFormat();
  const handleNavigate = useNavigatePage();

  //state
  //add additionals
  const [additionalInput, setAdditionalInput] = useState('');
  const [additionals, setAdditionals] = useState([]);

  //global

  //select product
  const { productSelection, cardProductSelection, setCardProductSelection } =
    useProductSelection();

  //cart store
  const { addItem, cart, removeProductList, addAdditionalToProduct } =
    useCartStore();

  //total products in cart
  // Busca el producto seleccionado en el carrito
  const selectedInCart = cart.find((item) => item.id === productSelection.id);

  // Cantidad y subtotal solo del producto seleccionado
  const selectedQuantity = selectedInCart ? selectedInCart.quantity : 0;
  const selectedSubtotal = selectedInCart
    ? selectedInCart.quantity * selectedInCart.price
    : 0;

  //handle add cart store
  const handleAddToCart = () => {
    addItem(productSelection, additionals);
    setAdditionals([]);
  };

  //handle add additional
  const handleAddAdditional = () => {
    if (selectedQuantity > 0 && additionalInput.trim() !== '') {
      addAdditionalToProduct(productSelection.id, {
        additional: additionalInput,
      });
      setAdditionalInput('');
    }
  };

  //remove product
  const handleRemoveToCart = () => {
    removeProductList(productSelection);
  };

  //retur page
  const handleReturnPage = () => {
    handleNavigate('/');
    setCardProductSelection(false);
  };

  //react
  //format number
  const country = 'es-CO';
  const numberFormat = formatNumber(selectedSubtotal, country);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <aside
      className={clsx('product_selection__container', {
        'product_selection__container--active': cardProductSelection,
        'product_selection__container--inactive': !cardProductSelection,
      })}
    >
      <header className="header_product_selection">
        <CaretIconLeft onClick={handleReturnPage} />
      </header>

      <figure className="image_product_selection_container">
        <img
          src={productSelection.image}
          alt={`product_selection_${productSelection.image}`}
          className="image_product_selection"
        />
      </figure>

      <div className="production_selection_content">
        <DetailsProductCard
          title={productSelection.name}
          description={productSelection.description}
          price={productSelection.price}
        />

        <section className="total_product_selection">
          <p className="total_amount">Cantidad: {selectedQuantity}</p>
          <p className="total_price">Precio total: {numberFormat} COP</p>
        </section>

        <footer className="actions_product_selection">
          <section className="added_other_product">
            <PrimaryButtonComponent text="Añadir" onClick={handleAddToCart} />
            <SecondaryButtonComponent
              text="Quitar"
              onClick={handleRemoveToCart}
            />
          </section>

          <section className="section_added_aditionals">
            <InputComponent
              placeholder=""
              label="Escribe los adicionales"
              type="text"
              id="added_aditionals"
              onChange={(e) => setAdditionalInput(e.target.value)}
              value={additionalInput}
              disabled={
                selectedQuantity === 0 ||
                (selectedInCart?.additionals?.length || 0) >= selectedQuantity
              }
            />
            <ul>
              {(selectedInCart?.additionals || []).map((ad, idx) => (
                <li key={idx}>{ad.additional}</li>
              ))}
            </ul>
            <PrimaryButtonComponent
              text="Agregar Adicionales"
              onClick={handleAddAdditional}
              disabled={
                selectedQuantity === 0 ||
                (selectedInCart?.additionals?.length || 0) >=
                  selectedQuantity ||
                additionalInput.trim() === ''
              }
            />
          </section>
        </footer>
      </div>
    </aside>
  );
};

export default ProductSelection;
