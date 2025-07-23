//css
import './profile_settings_page.css';
//layout
import TabBar from '../../../components/bars/tap_bar/TapBar';
//components
import CaretIconRight from '../../../components/caret_icons/caret_icon_rigth/CaretIconRight';
//icons
import {
  MdLock,
  MdAccountCircle,
  MdLocationOn,
  MdExitToApp,
} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ProfileSettingsPage = () => {
  //navigate
  const navigate = useNavigate();

  return (
    <section className="profile_settings_container">
      <header className="profile_settings_header">
        <h1 className="profile_settings_header__title">
          Configuración del Perfil
        </h1>
        <p className="profile_settings_header__description">
          Edita tu perfil y ajusta tus preferencias.
        </p>
      </header>

      {/* options */}
      <ul className="profile_settings_options">
        {/* profile information  */}
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

        {/* password */}
        <li
          className="profile_settings_option"
          onClick={() => {
            navigate('/profile_settings/change_password');
          }}
        >
          <MdLock className="profile_settings_option__icon" />

          <p className="profile_settings_option__text_container">
            <span className="profile_settings_option__text">Contraseña</span>
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
            navigate('/profile_settings/edit_locations');
          }}
        >
          <MdLocationOn className="profile_settings_option__icon" />

          <p className="profile_settings_option__text_container">
            <span className="profile_settings_option__text">Ubicaciónes</span>
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
        <li className="profile_settings_option profile_settings_option__logout">
          <MdExitToApp className="profile_settings_option__icon" />
          <p className="profile_settings_option__text_container">
            <span className="profile_settings_option__text">
              Cerrar Sección
            </span>
          </p>
        </li>
      </ul>

      <TabBar />
    </section>
  );
};

export default ProfileSettingsPage;
