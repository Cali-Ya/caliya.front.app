//css
import './promotion_card.css';
//icons
import { MdStorefront } from 'react-icons/md';
//components
import { logos } from '../../../../assets/assets_exports';

const PromotionCard = () => {
  return (
    <div className="promotion_card_container">
      <figure className="container_image_promotion_card">
        <img
          src={logos.D_M_O.D_M_O_logo}
          alt=""
          className="image_promotion_card"
        />

        <span className="text_image_promotion_card">¡Promoción!</span>
      </figure>

      <article className="info_promotion_card">
        <h1 className="title_info_promotion_card">Salchipapa</h1>
        <p className="discount_info_promotion">10.000</p>

        <div className="content_price_info_promotion_card">
          <p className="price_info_promotion_card">15.000</p>
          <MdStorefront className="icon_price_infor_promotion_card" />
        </div>
      </article>
    </div>
  );
};

export default PromotionCard;
