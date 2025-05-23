//css
import './store_card_food_list.css';
//icons
import IconAddShoppingCard from '../icons/IconAddShoppingCard';
import useNumberFormat from '../../../../hooks/useNumberFormat';

const StoreCardFoodList = ({
  id,
  title,
  description,
  image,
  price,
  prev_price,
  onClick,
}) => {
  //custom hook
  const { formatNumber } = useNumberFormat();
  const country = 'es-CO';
  const Price = formatNumber(price, country);
  const prevePrice = formatNumber(prev_price, country);

  return (
    <li className="store_food_list__item">
      <article className="store_food_list__info">
        <h3 className="store_food_list_title">{title}</h3>
        <p className="store_food_list_description">{description}</p>

        <div className="store_food_list_prices">
          <p className="store_food_list_prices__price">{Price}</p>
          {prev_price && (
            <p className="store_food_list_prices__discount">{prevePrice}</p>
          )}
        </div>
      </article>

      <figure className="container_food_list_image">
        <img
          src={image}
          alt={title + description}
          className="food_list__image"
        />

        <IconAddShoppingCard />
      </figure>
    </li>
  );
};

export default StoreCardFoodList;
