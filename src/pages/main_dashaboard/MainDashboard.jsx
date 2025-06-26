//css
import './main_dashboard.css';
//components
import SearchComponent from '../../components/search_component/SearchComponent';
import ShoppingCartIcon from '../../components/icons/shopping_cart_icon/ShoppingCartIcon';
import ShopCard from '../../features/main_dashboard/components/shop_card/ShopCard';
//layouts
import CombosLayout from '../../layout/combos/CombosLayout';
//servcies
import getAllShops from '../../features/main_dashboard/services/get_all_shops';
import getCombos from '../../features/main_dashboard/services/get_combos';
//react
import { useEffect, useState } from 'react';

const MainDashboard = () => {
  //shops
  const [shops, setShops] = useState();
  //combos
  const [combos, setCombos] = useState();

  //get all shops
  useEffect(() => {
    getAllShops(setShops);
    getCombos(setCombos);
  }, []);

  return (
    <main className="main_dashboard">
      {/* header */}
      <header className="header_main_dashboard">
        {/* <SearchComponent /> */}
        <ShoppingCartIcon />
      </header>

      {/* all products */}
      <section className="container_products_main_dashboard">
        {/* combos */}
        <section className="container_combos_main_dashboard">
          <h1 className="title_combos_main_dashboard">¡Los mejores Combos!</h1>
          {combos && <CombosLayout combos={combos} />}
        </section>

        {/* shops */}
        <section className="container_shops_main_dashboard">
          {shops &&
            shops.map((shop) => (
              <ShopCard
                key={shop.id}
                id_shop={shop.id}
                tag_shop={shop.tag}
                name={shop.name}
                logo={shop.logo}
                score={shop.score}
                address={shop.address}
                type={shop.type}
                opened={shop.opened}
                tag={shop.tag}
                home_phone={shop.home_phone}
              />
            ))}
        </section>
      </section>
    </main>
  );
};

export default MainDashboard;
