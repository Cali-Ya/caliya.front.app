//css
import './shop_card.css';
//icons
import { MdStar } from 'react-icons/md';
//react router dom
import { useNavigate } from 'react-router-dom';
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
  //navigate
  const navigate = useNavigate();

  // Redondea el score a un decimal
  const formattedScore = Number(score).toFixed(1);

  //
  const handleNavigation = () => {
    navigate(`/store_page/${id_shop}`);
  };

  return (
    <div className="container_shop_card" onClick={handleNavigation}>
      {/* image */}
      <figure className="container_logo_shop_card">
        <img src={logo} alt={logo} />
      </figure>

      {/* description */}
      <article className="content_description_shop_card">
        <h1 className="description_shop_card__name">{name}</h1>
        <p className="description_shop_card__score">
          <MdStar className="description_shop_card__icon" />
          {formattedScore}
        </p>
        <p className="description_shop_card__home_phone">{home_phone}</p>
        <p className="description_shop_card__address">{address}</p>
      </article>
    </div>
  );
};

export default ShopCard;
