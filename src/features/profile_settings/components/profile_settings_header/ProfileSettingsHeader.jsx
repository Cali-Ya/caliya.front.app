//css
import '../../page/profile_settings_page.css';
import CaretIconLeft from '../../../../components/caret_icons/caret_icon_left/CaretIconLeft.jsx';
//react
import { useNavigate } from 'react-router-dom';

const ProfileSettingsHeader = ({ title = 'Title header' }) => {
  const navigate = useNavigate();

  return (
    <header className="profile_settings_header">
      <CaretIconLeft
        onClick={() => navigate('/profile_settings')}
        preferColor={false}
        className="profile_settings_header__caret_left"
      />
      <h1 className="profile_settings_header__title">{title}</h1>
    </header>
  );
};

export default ProfileSettingsHeader;
