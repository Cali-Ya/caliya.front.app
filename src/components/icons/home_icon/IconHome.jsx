//css
import { useNavigate } from 'react-router-dom';
import './icon_home.css';
//icons
import { MdHome } from 'react-icons/md';
const IconHome = () => {
  const navigate = useNavigate();

  return (
    <div className="icon_home_container" onClick={() => navigate('/')}>
      <MdHome className="icon_home" />
    </div>
  );
};

export default IconHome;
