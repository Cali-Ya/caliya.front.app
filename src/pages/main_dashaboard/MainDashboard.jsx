//css
import './main_dashboard.css';
//icons
import { RiShoppingCartLine } from 'react-icons/ri';
//custom hooks
import useCartStore from '../../store/cart.store';
//components
import SearchComponent from '../../components/search_component/SearchComponent';
//react router dom
import { useNavigation } from 'react-router-dom';
//const
import { AllPathRoutes } from '../../const/AllPathRoutes';
import PromotionCard from '../../features/main_dashboard/components/promotion_card/PromotionCard';

const MainDashboard = () => {
  //globals
  const { cart } = useCartStore();

  //react router dom
  const navigate = useNavigation();

  const handleOpenCartStore = () => {
    const cartLength = 0;
    if (cart.length === cartLength) navigate(AllPathRoutes);
  };

  return (
    <main className="main_dashboard">
      {/* header */}
      <header className="header_main_dashboard">
        <SearchComponent />
        <RiShoppingCartLine
          className="cart_icon_header_main_dashboard"
          onClick={handleOpenCartStore}
        />
      </header>

      {/* all products */}
      <section className="products_sections_main_dashboard">
        {/* promotions */}
        <figure className="promotions_section_main_dashaboard">
          <h1 className="title_promotions_section_main_dashboard">
            ¡Promociones Especiales!
          </h1>

          {/* all promotions  */}
          <div className="content_promotions_section_main_dasboard">
            <PromotionCard />
            <PromotionCard />
            <PromotionCard />
            <PromotionCard />
          </div>
        </figure>
      </section>
    </main>
  );
};

export default MainDashboard;
