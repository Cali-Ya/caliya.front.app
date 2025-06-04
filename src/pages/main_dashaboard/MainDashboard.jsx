//css
import './main_dashboard.css';
//components
import SearchComponent from '../../components/search_component/SearchComponent';
import ShoppingCartIcon from '../../components/icons/shopping_cart_icon/ShoppingCartIcon';
import ShopCard from '../../features/main_dashboard/components/shop_card/ShopCard';
//servcies
import getAllShops from '../../features/main_dashboard/services/get_all_shops';
//react
import { useEffect, useState } from 'react';

const MainDashboard = () => {
  //shops
  const [shops, setShops] = useState();

  //get all shops
  useEffect(() => {
    getAllShops(setShops);
  }, []);

  console.log(shops);

  return (
    <main className="main_dashboard">
      {/* header */}
      <header className="header_main_dashboard">
        <SearchComponent />
        <ShoppingCartIcon />
      </header>

      {/* all products */}
      <section className="container_products_main_dashboard">
        {/*   <section className="container_promotions_main_dashaboard">
          <h1 className="title_promotions_main_dashboard">
            ¡Combos Especiales!
          </h1>
        
          <div className="content_promotions_main_dasboard">
            <PromotionCard />
          </div>
        </section> */}

        {/* shops */}
        <section className="container_shops_main_dashboard">
          {shops &&
            shops.map((shop) => (
              <ShopCard
                key={shop.id}
                id_shop={shop.id}
                name={shop.name}
                logo={shop.logo}
                score={shop.score}
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
