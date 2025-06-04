//css
import './store_card_food_list.css';
//icons
import IconAddShoppingCard from '../icons/IconAddShoppingCard';
//custom hooks
import useNumberFormat from '../../../../hooks/useNumberFormat';
import useHandleBuyProduct from '../../../../lib/shared/useHandleBuyProduct';
import useFloatFormat from '../../../../hooks/useFloatNumber';
import ScoreStar from '../../../../components/icons/score_star/ScoreStar';

const StoreCardFoodList = ({
  id,
  name,
  description,
  image,
  price,
  prev_price,
  score,
}) => {
  //custom hook
  //format number
  const { formatNumber } = useNumberFormat();
  const country = 'es-CO';
  const Price = formatNumber(price, country);
  const prevePrice = formatNumber(prev_price, country);

  //buy product
  const purcharse_product_information = {
    id: id,
    name: name,
    description: description,
    image: image,
    price: price,
    prev_price: prev_price,
  };

  //handle buy product
  const handleBuyProduct = useHandleBuyProduct();

  //float format
  const { formatFloat } = useFloatFormat();

  //format score
  const decimalsScore = 1;
  const formattedScore = formatFloat(score, decimalsScore);

  return (
    <li
      className="store_food_list__item"
      onClick={() => handleBuyProduct(purcharse_product_information)}
    >
      <article className="store_food_list__info">
        <h3 className="store_food_list_title">{name}</h3>
        <p className="store_food_list_description">{description}</p>

        <div className="store_food_list_prices">
          <p className="store_food_list_prices__price">{Price}</p>
          {prev_price && (
            <p className="store_food_list_prices__discount">{prevePrice}</p>
          )}
        </div>

        <p className="store_food_list_prices__score">
          <ScoreStar />
          {formattedScore}
        </p>
      </article>

      <figure className="container_food_list_image">
        <img
          src={image}
          alt={name + description}
          className="food_list__image"
        />

        <IconAddShoppingCard />
      </figure>
    </li>
  );
};

export default StoreCardFoodList;
