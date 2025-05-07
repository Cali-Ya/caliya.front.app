//styles
import './HeaderStyle.css';
//images
import { logos } from '../../assets/assets_exports';

const Header = ({ Title }) => {
  return (
    <section className="header_component">
      <img
        src={logos.CaliYa.IsoTipo}
        alt="caliya_isotipo"
        className="img_header_component"
      />
      {Title && <h1 className="title header">{Title}</h1>}
    </section>
  );
};

export default Header;
