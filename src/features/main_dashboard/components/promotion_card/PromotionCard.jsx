//css
import './promotion_card.css';
//icons
import { MdStorefront } from 'react-icons/md';
//components
import CardDetails from '../../../../components/card_details/CardDetails';
//react
import { useNavigate } from 'react-router-dom';
//const
import { AllPathRoutes } from '../../../../const/AllPathRoutes';

const PromotionCard = () => {
  //navigation
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(AllPathRoutes.store_page);
  };

  const size_details = {
    size_title: '1.1rem',
    size_description: '.8rem',
    size_price: '1.1rem',
  };

  return (
    <div className="promotion_card_container" onClick={handleNavigate}>
      <figure className="container_image_promotion_card">
        <img
          src="https://res.cloudinary.com/dropks6mh/image/upload/v1747321566/salchi-sencilla-dmo_ugxmh8.png"
          alt=""
          className="image_promotion_card"
        />

        <span className="text_image_promotion_card">¡Promoción!</span>
      </figure>

      <article className="info_promotion_card">
        <CardDetails
          title="DMO"
          description="Salchipapa con que y jamon y mortadela"
          price="10000"
          prev_price="20000"
          size_title={size_details.size_title}
          size_price={size_details.size_price}
          size_description={size_details.size_description}
          icon={MdStorefront}
        />
      </article>
    </div>
  );
};

export default PromotionCard;
