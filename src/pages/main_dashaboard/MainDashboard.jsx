//css
import './main_dashboard.css';
//components
import ShoppingCartIcon from '../../components/icons/shopping_cart_icon/ShoppingCartIcon';
import ShopCard from '../../features/main_dashboard/components/shop_card/ShopCard';
import { ButtonPrimary } from '../../components/button_components/ButttonsComponents';
//layouts
import CombosLayout from '../../layout/combos/CombosLayout';
import TapBar from '../../components/bars/tap_bar/TapBar';
//servcies
import getAllShops from '../../features/main_dashboard/services/get_all_shops';
import getCombos from '../../features/main_dashboard/services/get_combos';
//custom hooks
import useCaliyaLoader from '../../store/caliya_loader.store';
import useRedirections from '../../store/redirections.store';
//utils
import {
  getDecryptedItem,
  setEncryptedItem,
} from '../../utils/encryptionUtilities';
import get_infomation_customer from '../../services/get_infomation_customer';
import get_all_location_customer from '../../services/get_all_location_customer';
//react
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ilustrations } from '../../assets/assets_exports';

const MainDashboard = () => {
  //navigate
  const navigate = useNavigate();
  //shops
  const [shops, setShops] = useState();
  //combos
  const [combos, setCombos] = useState();
  // loader local
  const [isLoading, setIsLoading] = useState(true);
  //locations customer
  const [locations, setLocations] = useState([]);
  const [getLocations, setGetLocations] = useState(false);

  //location
  const location = useLocation();

  const { setStateCaliyaLoader } = useCaliyaLoader();

  //redirections
  const { setRedirectionState } = useRedirections();

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

  //create session
  useEffect(() => {
    const user_session = 'user_session';
    const user_data = getDecryptedItem(user_session);
    setUserData(user_data);

    if (user_data && user_data.session) {
      get_infomation_customer(setEncryptedItem).then(() => {
        // Actualiza el estado después de obtener la info del usuario
        const updatedUserData = getDecryptedItem(user_session);
        setUserData(updatedUserData);
      });
    }

    get_all_location_customer(setLocations, setGetLocations);
  }, []);

  // Redirección si no hay ubicaciones
  useEffect(() => {
    // Solo ejecuta la redirección cuando la petición terminó
    if (getLocations) {
      if (Array.isArray(locations) && locations.length === 0) {
        const data_redirection_page = {
          title: 'Agrega una ubicación',
          img: ilustrations.LocationIlustration,
          description: (
            <>
              {`Agrega un ubicación para poder realizar pedidos.`}
              <a href="/profile_settings/my_locations"> Agregar ubicaciónes</a>
            </>
          ),
        };
        setRedirectionState(data_redirection_page);
        navigate('/redirect/locations');
      }
      // Si hay ubicaciones, no haces nada y se queda en el dashboard
    }
  }, [getLocations, locations, setRedirectionState, navigate]);

  // Actualiza userData cada vez que cambia la ruta
  useEffect(() => {
    const user_session = 'user_session';
    const user_data = getDecryptedItem(user_session);
    setUserData(user_data);
  }, [location]);

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
            <ButtonPrimary
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
