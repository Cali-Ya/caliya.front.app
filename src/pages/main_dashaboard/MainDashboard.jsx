//css
import './main_dashboard.css';
//components
import SearchComponent from '../../components/search_component/SearchComponent';
import PromotionCard from '../../features/main_dashboard/components/promotion_card/PromotionCard';
import ShoppingCartIcon from '../../components/shopping_cart_icon/ShoppingCartIcon';
import { useEffect, useState } from 'react';
import getAllShops from '../../features/main_dashboard/services/get_all_shops';
import ShopCard from '../../features/main_dashboard/components/shop_card/ShopCard';

const MainDashboard = () => {
  //shops
  const [shops, setShops] = useState();

  //get all shops
  useEffect(() => {
    getAllShops(setShops);
  }, []);

  return (
    <main className="main_dashboard">
      {/* header */}
      <header className="header_main_dashboard">
        <SearchComponent />
        <ShoppingCartIcon />
      </header>

      {/* all products */}
      <section className="container_products_main_dashboard">
        {/* promotions */}
        <section className="container_promotions_main_dashaboard">
          <h1 className="title_promotions_main_dashboard">
            ¡Promociones Especiales!
          </h1>

          {/* promotions  */}
          <div className="content_promotions_main_dasboard">
            <PromotionCard />
            <PromotionCard />
            <PromotionCard />
            <PromotionCard />
          </div>
        </section>

        {/* shops */}
        <section className="container_shops_main_dashboard">
          <h1 className="title_shops_main_dashboard">Tiendas</h1>
          {shops &&
            shops.map((shop) => (
              <ShopCard
                id_shop={shop.id}
                name={shop.name}
                logo={shop.logo_image}
                score={shop.score}
                home_phone={shop.home_phone}
                address={shop.address}
                type={shop.type}
                opened={shop.opened}
              />
            ))}
        </section>
      </section>
    </main>
  );
};

export default MainDashboard;
