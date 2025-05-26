//css
import './card_details.css';
//custom hoook
import useNumberFormat from '../../hooks/useNumberFormat';

const CardDetails = ({
  title,
  description,
  price,
  prev_price,
  size_title,
  size_description,
  size_price,
  with_price,
  activeElipsis,
  icon,
}) => {
  //css elipsis
  const elipsis = {
    whiteSpace: activeElipsis ? 'nowrap' : '',
    overflow: activeElipsis ? 'hidden' : '',
    textOverflow: activeElipsis ? 'ellipsis' : '',
  };

  const IconDiscount = icon;

  //custom hook
  const { formatNumber } = useNumberFormat();
  const country = 'es-CO';
  const price_format = formatNumber(price, country);
  const prev_price_format = formatNumber(prev_price, country);

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

      <article className="content_prices">
        <span
          className="product_card_details__price"
          style={{
            fontSize: size_price,
            width: with_price,
          }}
        >
          {price_format} COP
        </span>
        <span className="product_card_details__discount">
          {prev_price_format} COP
        </span>
      </article>

      {IconDiscount && <IconDiscount className="icon_discount" />}
    </section>
  );
};

export default CardDetails;
