//css
import './product_selection.css';

import useProductSelection from '../../store/product_selection.store';
import clsx from 'clsx';
import DetailsProductCard from '../../components/details_product_card/DetailsProductCard';
import PrimaryButtonComponent from '../../../../components/ButtonComponent/ButtonPrimary/PrimaryButtonComponent';
import SecondaryButtonComponent from '../../../../components/ButtonComponent/ButtonSecondary/SecondaryButtonComponent';
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
  //add additionals
  const additionalsRef = useRef();
  const [selectedAdditionals, setSelectedAdditionals] = useState([]);

  //global

  //select product
  const { productSelection, cardProductSelection, setCardProductSelection } =
    useProductSelection();

  //cart store
  const { addItem, cart, removeProductList } = useCartStore();

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
    });
    setSelectedAdditionals([]);
    additionalsRef.current?.clearChecks();
  };

  //handle add additional
  const handleChangeAdditionals = (additionals) => {
    setSelectedAdditionals(additionals);
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
        <DetailsProductCard
          title={productSelection.name}
          description={productSelection.description}
          price={productSelection.price}
        />

        <section className="total_product_selection">
          <p className="total_amount">Cantidad: {totalQuantity}</p>

          <p className="total_price">Precio total: {numberFormat} COP</p>
        </section>

        <footer className="actions_product_selection">
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
            <SecondaryButtonComponent
              text="Quitar"
              onClick={handleRemoveToCart}
            />
          </section>
        </footer>
      </div>
    </aside>
  );
};

export default ProductSelection;
