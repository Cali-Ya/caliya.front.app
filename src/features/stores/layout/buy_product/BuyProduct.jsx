//css
import './buy_product.css';
//global
import useBuyProduct from '../../store/buy_product.store';
import useCartStore from '../../../../store/cart.store';
import useCaliyaLoader from '../../../../store/caliya_loader.store';
//assets
import { logos } from '../../../../assets/assets_exports';
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
import useFullHeight from '../../../../hooks/useFullHeight';
//services
import getAdditionals from '../../services/get_additionals';
//react
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const BuyProduct = () => {
  //loader
  const { setStateCaliyaLoader } = useCaliyaLoader();
  //loader local
  const [isLoading, setIsLoading] = useState(true);
  //additionals
  const [additionals, setAdditionals] = useState(null);

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
  const { purcharseInformationProduct } = useBuyProduct();

  // calculate price unitary
  const additionalsTotal = Array.isArray(selectedAdditionals)
    ? selectedAdditionals.reduce((sum, a) => sum + (a.price || 0), 0)
    : 0;

  const unitPrice = (purcharseInformationProduct.price || 0) + additionalsTotal;
  const preTotalPrice = formatNumber(unitPrice * quantity, country);

  //render first page
  useEffect(() => {
    window.scrollTo(0, 0);
    setStateCaliyaLoader(true);
    setIsLoading(true);
    getAdditionals(
      setAdditionals,
      purcharseInformationProduct.category_id
    ).finally(() => {
      setStateCaliyaLoader(false);
      setIsLoading(false);
    });
  }, [purcharseInformationProduct.category_id]);

  //clear pre-buy is open modal
  useEffect(() => {
    setSelectedAdditionals([]);
    setObservation('');
    setQuantity(1);
    additionalsRef.current?.clearChecks();
    window.scrollTo(0, 0);
  }, [purcharseInformationProduct.id]);

  // Si está cargando, no renderices el contenido
  if (isLoading) return null;

  //add to cart
  const handleAddToCart = () => {
    addItem({
      ...purcharseInformationProduct,
      additionals: selectedAdditionals,
      observation: observation.trim(),
      quantity,
      price: purcharseInformationProduct.price, // SOLO el precio base
      prev_price: purcharseInformationProduct.prev_price,
      name: purcharseInformationProduct.name,
      shopInfo: purcharseInformationProduct.shopInfo,
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
    navigate(-1);
  };

  return (
    <aside className="buy_product__container">
      <header className="header_buy_product">
        <CaretIconLeft
          onClick={() => {
            setSelectedAdditionals([]);
            setObservation('');
            setQuantity(1);
            handleReturnPage();
            additionalsRef.current?.clearChecks();
          }}
        />
        <ShoppingCartIcon />
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

        {/* additionals */}
        {Array.isArray(additionals) && additionals.length > 0 ? (
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

      {/* footer */}
      <footer className="footer_buy_product">
        {/* total buy product */}
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

        {/* button */}
        <div className="footer_buy_product__content_button">
          <PrimaryButtonComponent
            text="Añadir al Carrito"
            onClick={handleAddToCart}
          />
        </div>
      </footer>
    </aside>
  );
};

export default BuyProduct;
