//css
import './buy_product.css';
//clsx
import clsx from 'clsx';
//global
import useBuyProduct from '../../store/buy_product.store';
import useCartStore from '../../../../store/cart.store';
//icons
import { FaMinus, FaPlus } from 'react-icons/fa6';
//components
import DropDownAdditionals from '../../components/dropdown_additionals/DropdownAdditionals';
import CardDetails from '../../../../components/cards/card_details/CardDetails';
import PrimaryButtonComponent from '../../../../components/button_components/button_primary/PrimaryButtonComponent';
import InputComponent from '../../../../components/input_component/InputComponent';
import CaretIconLeft from '../../../../components/caret_icons/caret_icon_left/CaretIconLeft';
import ShoppingCartIcon from '../../../../components/icons/shopping_cart_icon/ShoppingCartIcon';
//custom hooks
import useNumberFormat from '../../../../hooks/useNumberFormat';
//react
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import useFullHeight from '../../../../hooks/useFullHeight';
import getAdditionals from '../../services/get_additionals';
import { logos } from '../../../../assets/assets_exports';

const BuyProduct = () => {
  //additionals
  const [additionals, setAdditionals] = useState();

  //full height
  useFullHeight();

  //const
  const country = 'es-CO';

  //navigate
  const navigate = useNavigate();

  //ref
  //aditional
  const additionalsRef = useRef();

  //custom hooks
  const { formatNumber } = useNumberFormat();

  //global
  //cart store
  const { addItem } = useCartStore();

  //state the is pre-buy
  const [observation, setObservation] = useState('');
  const [selectedAdditionals, setSelectedAdditionals] = useState([]);
  const [quantity, setQuantity] = useState(1);

  //select product
  const {
    purcharseInformationProduct,
    togglePageBuyProduct,
    setTogglePageBuyProduct,
  } = useBuyProduct();

  // calculate price unitary
  const additionalsTotal = selectedAdditionals.reduce((sum, add) => {
    const found = additionals.find((ad) => ad.name === add);
    return sum + (found ? found.price : 0);
  }, 0);
  const unitPrice = (purcharseInformationProduct.price || 0) + additionalsTotal;
  const preTotalPrice = formatNumber(
    ((purcharseInformationProduct.price || 0) +
      selectedAdditionals.reduce((sum, add) => {
        const found = additionals.find((ad) => ad.name === add);
        return sum + (found ? found.price : 0);
      }, 0)) *
      quantity,
    country
  );

  //clear pre-buy is open modal
  useEffect(() => {
    setSelectedAdditionals([]);
    setObservation('');
    setQuantity(1);
    additionalsRef.current?.clearChecks();
    window.scrollTo(0, 0);
  }, [purcharseInformationProduct.id]);

  //add to cart
  const handleAddToCart = () => {
    addItem({
      ...purcharseInformationProduct,
      additionals: selectedAdditionals,
      observation: observation.trim(),
      quantity,
      price: unitPrice,
      prev_price: purcharseInformationProduct.prev_price,
      name: purcharseInformationProduct.name,
      description: purcharseInformationProduct.description,
    });

    setSelectedAdditionals([]);
    setObservation('');
    setQuantity(1);
    additionalsRef.current?.clearChecks();
  };

  // sum a rest quiantity
  const handleAddPreBuy = () => setQuantity((q) => q + 1);
  const handleRemovePreBuy = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  //handle return page
  const handleReturnPage = () => {
    const returnPage = false;
    setTogglePageBuyProduct(returnPage);
    navigate(-1);
  };

  //render first page
  useEffect(() => {
    window.scrollTo(0, 0);
    getAdditionals(setAdditionals, purcharseInformationProduct.category_id);
  }, []);

  return (
    <aside
      className={clsx('buy_product__container', {
        'buy_product__container--active': !togglePageBuyProduct,
        'buy_product__container--inactive': togglePageBuyProduct,
      })}
    >
      <header className="header_buy_product">
        <CaretIconLeft
          onClick={() => {
            setTogglePageBuyProduct(false);
            setSelectedAdditionals([]);
            setObservation('');
            setQuantity(1);
            handleReturnPage();
            additionalsRef.current?.clearChecks();
          }}
        />
        <ShoppingCartIcon isColor={false} />
      </header>

      <figure className="image_buy_product_container">
        <img
          src={purcharseInformationProduct.image}
          alt={`buy_product_${purcharseInformationProduct.image}`}
          className="image_buy_product"
        />
      </figure>

      <section className="buy_product_content">
        <CardDetails
          title={purcharseInformationProduct.name}
          description={purcharseInformationProduct.description}
          price={purcharseInformationProduct.price}
          prev_price={purcharseInformationProduct.prev_price}
        />

        <div className="observations_actions_buy_product">
          <InputComponent
            id="pruduct_observation"
            label="Observaciones"
            placeholder=""
            value={observation}
            onChange={(e) => setObservation(e.target.value)}
          />
          <p className="obersvations_text"></p>
        </div>
        {additionals ? (
          <DropDownAdditionals
            ref={additionalsRef}
            list={additionals}
            title="Adicionales"
            onChangeAdditionals={setSelectedAdditionals}
          />
        ) : (
          <div className="buy_product_content__container_not_additionals_image">
            <img
              src={logos.CaliYa.Isologo}
              alt={logos.CaliYa.Isologo}
              className="buy_product_content__not_additionals_image"
            />
          </div>
        )}
      </section>

      <footer className="footer_buy_product">
        <article className="total_buy_product">
          <div className="add_product_container">
            <FaMinus
              className="add_product__icons"
              onClick={handleRemovePreBuy}
            />
            <p className="add_product">{quantity}</p>
            <FaPlus className="add_product__icons" onClick={handleAddPreBuy} />
          </div>

          <p className="total_price">$ {preTotalPrice}</p>
        </article>
        <PrimaryButtonComponent
          text="Añadir al Carrito"
          onClick={handleAddToCart}
        />
      </footer>
    </aside>
  );
};

export default BuyProduct;
