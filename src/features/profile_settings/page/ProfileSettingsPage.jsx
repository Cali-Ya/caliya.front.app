//css
import './profile_settings_page.css';
//layout
import TabBar from '../../../components/bars/tap_bar/TapBar';
//components
import CaretIconRight from '../../../components/caret_icons/caret_icon_rigth/CaretIconRight';
//services
import logout_customer from '../services/logout_customer';
//icons
import {
  MdLock,
  MdAccountCircle,
  MdLocationOn,
  MdExitToApp,
} from 'react-icons/md';
import { ilustrations } from '../../../assets/assets_exports';
//utils
import {
  getDecryptedItem,
  setEncryptedItem,
} from '../../../utils/encryptionUtilities';
//react
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProfileSettingsPage = () => {
  //navigate
  const navigate = useNavigate();

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

  //use cookie

  //logout
  const logOut = () => {
    const user_session = 'user_session';
    const user_data = getDecryptedItem(user_session);

    if (user_data) {
      setUserData({
        session: false,
        data: null,
      });
      logout_customer(navigate);
      setEncryptedItem(user_session, { session: false, data: null });
    }
  };

  return (
    <section className="profile_settings_container">
      {userData.session ? (
        <>
          <header className="profile_settings_header">
            <h1 className="profile_settings_header__title">
              Configuración del Perfil
            </h1>
            <p className="profile_settings_header__description">
              Edita tu perfil y ajusta tus preferencias.
            </p>
          </header>

          <ul className="profile_settings_options">
            <li
              className="profile_settings_option"
              onClick={() => {
                navigate('/profile_settings/account_information');
              }}
            >
              <MdAccountCircle className="profile_settings_option__icon" />

              <p className="profile_settings_option__text_container">
                <span className="profile_settings_option__text">
                  Información Personal
                </span>
                <span className="profile_settings_option__description">
                  Cambia la información de tu perfil
                </span>
              </p>

              <CaretIconRight
                preferColor={false}
                type="normal"
                className="profile_settings_option__caret"
              />
            </li>

            <li
              className="profile_settings_option"
              onClick={() => {
                navigate('/profile_settings/change_password');
              }}
            >
              <MdLock className="profile_settings_option__icon" />

              <p className="profile_settings_option__text_container">
                <span className="profile_settings_option__text">
                  Contraseña
                </span>
                <span className="profile_settings_option__description">
                  Cambia tu contraseña
                </span>
              </p>

              <CaretIconRight
                preferColor={false}
                type="normal"
                className="profile_settings_option__caret"
              />
            </li>

            {/* location */}
            <li
              className="profile_settings_option"
              onClick={() => {
                navigate('/profile_settings/my_locations');
              }}
            >
              <MdLocationOn className="profile_settings_option__icon" />

              <p className="profile_settings_option__text_container">
                <span className="profile_settings_option__text">
                  Ubicaciónes
                </span>
                <span className="profile_settings_option__description">
                  Edita tus ubicaciones
                </span>
              </p>

              <CaretIconRight
                preferColor={false}
                type="normal"
                className="profile_settings_option__caret"
              />
            </li>

            {/* logout */}
            <li
              className="profile_settings_option profile_settings_option__logout"
              onClick={logOut}
            >
              <MdExitToApp className="profile_settings_option__icon" />
              <p className="profile_settings_option__text_container">
                <span className="profile_settings_option__text">
                  Cerrar Sección
                </span>
              </p>
            </li>
          </ul>
        </>
      ) : (
        <footer className="profile_settings_no_session">
          <img
            src={ilustrations.MotoIlustration}
            alt={ilustrations.MotoIlustration}
          />
          <h1 className="profile_settings_no_session__title">
            <a href="/auth/login">Inicia Sección</a> para poder usar la
            configuración de perfil
          </h1>
          <p className="profile_settings_no_session__description">
            Si no tienes cuenta <a href="/auth/sign_up">Registrate</a>
          </p>
        </footer>
      )}

      <TabBar />
    </section>
  );
};

export default ProfileSettingsPage;
