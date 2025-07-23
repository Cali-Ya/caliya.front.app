//css
import './main_dashboard.css';
//components
import ShoppingCartIcon from '../../components/icons/shopping_cart_icon/ShoppingCartIcon';
import ShopCard from '../../features/main_dashboard/components/shop_card/ShopCard';
import PrimaryButtonComponent from '../../components/button_components/button_primary/PrimaryButtonComponent';
//layouts
import CombosLayout from '../../layout/combos/CombosLayout';
import TapBar from '../../components/bars/tap_bar/TapBar';
//servcies
import getAllShops from '../../features/main_dashboard/services/get_all_shops';
import getCombos from '../../features/main_dashboard/services/get_combos';
//custom hooks
import useCaliyaLoader from '../../store/caliya_loader.store';
//utils
import { getDecryptedItem } from '../../utils/encryptionUtilities';
//react
import { useEffect, useState } from 'react';
import { data, useNavigate } from 'react-router-dom';

const MainDashboard = () => {
  //navigate
  const navigate = useNavigate();
  //shops
  const [shops, setShops] = useState();
  //combos
  const [combos, setCombos] = useState();
  // loader local
  const [isLoading, setIsLoading] = useState(true);

  const { setStateCaliyaLoader } = useCaliyaLoader();

  //get all shops
  useEffect(() => {
    const fetchData = async () => {
      setStateCaliyaLoader(true);
      setIsLoading(true);

      await Promise.all([getAllShops(setShops), getCombos(setCombos)]);

      setIsLoading(false);
      setStateCaliyaLoader(false);
    };
    fetchData();
  }, []);

  //validate user session
  const [userData, setUserData] = useState({
    session: false,
    data: null,
  });

  useEffect(() => {
    const user_session = 'user_session';

    const user_data = getDecryptedItem(user_session);
    setUserData(user_data);
  }, []);

  if (isLoading) null;

  return (
    <main className="main_dashboard">
      {/* header */}
      <header className="header_main_dashboard">
        <div className="header_main_dashboard__title">
          {userData.session ? (
            <h3 className="header_main_dashboard__title__text">
              Bienvenido, {userData.data.name}
            </h3>
          ) : (
            <PrimaryButtonComponent
              text="Registrate"
              onClick={() => navigate('/auth/sign_up')}
            />
          )}
        </div>
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

      {/* footer */}
      <TapBar />
    </main>
  );
};

export default MainDashboard;
