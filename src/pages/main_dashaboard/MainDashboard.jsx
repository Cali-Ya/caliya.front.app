//css
import './main_dashboard.css';
//components
import SearchComponent from '../../components/search_component/SearchComponent';
import PromotionCard from '../../features/main_dashboard/components/promotion_card/PromotionCard';
import ShoppingCartIcon from '../../components/shopping_cart_icon/ShoppingCartIcon';

const MainDashboard = () => {
  return (
    <main className="main_dashboard">
      {/* header */}
      <header className="header_main_dashboard">
        <SearchComponent />
        <ShoppingCartIcon />
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
