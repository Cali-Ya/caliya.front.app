import './shop_card.css';

const ShopCard = ({
  id_shop,
  name,
  logo,
  score,
  home_phone,
  address,
  type,
  opened,
}) => {
  return (
    <div className="container_shop_card">
      {/* image */}
      <figure className="container_logo_shop_card">
        <img src={logo} alt={logo} />
      </figure>

      {/* description */}
      <article className="content_description_shop_card">
        <h1 className="description_shop_card__name">{name}</h1>
        <p className="description_shop_card__score">{score}</p>
        <p className="description_shop_card__address">{address}</p>
        <p className="description_shop_card__home_phone">{home_phone}</p>
      </article>
    </div>
  );
};

export default ShopCard;
