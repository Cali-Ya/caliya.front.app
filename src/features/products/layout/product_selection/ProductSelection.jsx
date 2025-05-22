//css
import './product_selection.css';

import useProductSelection from '../../store/product_selection.store';
import clsx from 'clsx';
import DetailsCard from '../../../../components/details_card/DetailsCard';
import PrimaryButtonComponent from '../../../../components/button_components/button_primary/PrimaryButtonComponent';
import InputComponent from '../../../../components/input_component/InputComponent';
import useNavigatePage from '../../../../hooks/useNavigatePage';
import { useEffect, useRef, useState } from 'react';
import useCartStore from '../../../../store/cart.store';
import CaretIconLeft from '../../../../components/caret_icons/caret_icon_left/CaretIconLeft';
import useNumberFormat from '../../../../hooks/useNumberFormat';
import DropDownSelectAdditionals from '../../components/dropdown_select_additionals/DropDownSelectAdditionals';

const ProductSelection = () => {
  //custom hooks
  const { formatNumber } = useNumberFormat();
  const handleNavigate = useNavigatePage();

  //state
  const [observation, setObservation] = useState('');

  //add additionals
  const additionalsRef = useRef();
  const [selectedAdditionals, setSelectedAdditionals] = useState([]);

  //global

  //select product
  const { productSelection, cardProductSelection, setCardProductSelection } =
    useProductSelection();

  //cart store
  const { addItem, cart } = useCartStore();

  //total products in cart

  // Busca el producto seleccionado en el carrito
  /*  const selectedInCart = cart.find((item) => item.id === productSelection.id); */

  // Cantidad y subtotal solo del producto seleccionado
  const totalQuantity = cart
    .filter((item) => item.id === productSelection.id)
    .reduce((sum, item) => sum + (item.quantity || 1), 0);

  const totalSubtotal = cart
    .filter((item) => item.id === productSelection.id)
    .reduce((sum, item) => sum + (item.quantity || 1) * item.price, 0);

  //handle add cart store
  const handleAddToCart = () => {
    addItem({
      ...productSelection,
      additionals: selectedAdditionals,
      observation: observation.trim(),
    });
    setSelectedAdditionals([]);
    setObservation('');
    additionalsRef.current?.clearChecks();
  };

  //handle add additional
  const handleChangeAdditionals = (additionals) => {
    setSelectedAdditionals(additionals);
  };

  //retur page
  const handleReturnPage = () => {
    handleNavigate('/');
    setCardProductSelection(false);
  };

  //react
  //format number
  const country = 'es-CO';
  const numberFormat = formatNumber(totalSubtotal, country);

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
        <DetailsCard
          title={productSelection.name}
          description={productSelection.description}
          price={productSelection.price}
        />

        <section className="total_product_selection">
          <p className="total_amount">Cantidad: {totalQuantity}</p>

          <p className="total_price">Precio total: {numberFormat} COP</p>
        </section>

        <footer className="actions_product_selection">
          <div className="observations_actions_product_selection">
            <InputComponent
              placeholder=""
              id="pruduct_observation"
              label="Observaciones"
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
            />
            <p className="obersvations_text"></p>
          </div>

          <DropDownSelectAdditionals
            ref={additionalsRef}
            list={['Salsa', 'Queso', 'Tocineta', 'Papas']}
            title="Agrega los adicionales"
            onChangeAdditionals={handleChangeAdditionals}
          />

          <section className="added_other_product">
            <PrimaryButtonComponent
              text="Añadir al Carrito"
              onClick={handleAddToCart}
            />
          </section>
        </footer>
      </div>
    </aside>
  );
};

export default ProductSelection;
