//css
import './tap_bar.css';
//icons
import { GoHomeFill } from 'react-icons/go';
import { FaUser } from 'react-icons/fa';
//react
import { useLocation, useNavigate } from 'react-router-dom';

const TapBar = () => {
  //navigate
  const navigate = useNavigate();
  //location
  const location = useLocation();
  const currentPath = location.pathname;

  //active color for icons
  //main path
  const activeColorMain =
    currentPath === '/'
      ? 'var(--active-color-primary)'
      : 'var(--active-color-secondary-light)';
  //account settings path
  const activeColorAccount =
    currentPath === '/account_settings'
      ? 'var(--active-color-primary)'
      : 'var(--active-color-secondary-light)';

  return (
    <footer className="tap_bar">
      <ul className="tap_bar_options">
        <li className="tap_bar__option">
          <GoHomeFill
            className="tap_bar__icon"
            style={{ color: activeColorMain }}
            onClick={() => navigate('/')}
          />
        </li>
        <li className="tap_bar__option">
          <FaUser
            className="tap_bar__icon"
            style={{ color: activeColorAccount }}
            onClick={() => navigate('/account_settings')}
          />
        </li>
      </ul>
    </footer>
  );
};

export default TapBar;
