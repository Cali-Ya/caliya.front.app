//css
import './shop_card.css';
//custom hook
import useFloatFormat from '../../../../hooks/useFloatNumber';
//components
import ScoreStar from '../../../../components/icons/score_star/ScoreStar';
//react router dom
import { useNavigate } from 'react-router-dom';

const ShopCard = ({
  id_shop,
  name,
  logo,
  score,
  address,
  type,
  opened,
  tag,
  home_phone,
}) => {
  //navigate
  const navigate = useNavigate();

  //float format
  const { formatFloat } = useFloatFormat();

  //format score
  const decimalsScore = 1;
  const formattedScore = formatFloat(score, decimalsScore);

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
          <ScoreStar />
          {formattedScore}
        </p>
        <p className="description_shop_card__address">{address}</p>
      </article>
    </div>
  );
};

export default ShopCard;
