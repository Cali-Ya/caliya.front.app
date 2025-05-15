import './details_product_card.css';

const DetailsProductCard = ({
  title,
  description,
  price,
  size_title,
  size_description,
  size_price,
  activeElipsis,
}) => {
  const elipsis = {
    whiteSpace: activeElipsis ? 'nowrap' : '',
    overflow: activeElipsis ? 'hidden' : '',
    textOverflow: activeElipsis ? 'ellipsis' : '',
  };

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
        {new Intl.NumberFormat('es-CO').format(price)} COP
      </span>
    </section>
  );
};

export default DetailsProductCard;
