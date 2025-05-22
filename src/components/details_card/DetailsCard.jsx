//css
import './details_card.css';
//custom hoook
import useNumberFormat from '../../hooks/useNumberFormat';

const DetailsCard = ({
  title,
  description,
  price,
  size_title,
  size_description,
  size_price,
  activeElipsis,
}) => {
  //css elipsis
  const elipsis = {
    whiteSpace: activeElipsis ? 'nowrap' : '',
    overflow: activeElipsis ? 'hidden' : '',
    textOverflow: activeElipsis ? 'ellipsis' : '',
  };

  //custom hook
  const { formatNumber } = useNumberFormat();
  const country = 'es-CO';
  const numberFormat = formatNumber(price, country);

  return (
    <section className="product_card_details">
      <h2
        className="product_card_details__title"
        style={{
          fontSize: size_title,
          ...elipsis,
        }}
      >
        {title}
      </h2>
      <p
        className="product_card_details__description"
        style={{
          fontSize: size_description,
          ...elipsis,
        }}
      >
        {description}
      </p>

      <span
        className="product_card_details__price"
        style={{
          fontSize: size_price,
          ...elipsis,
        }}
      >
        {numberFormat} COP
      </span>
    </section>
  );
};

export default DetailsCard;
