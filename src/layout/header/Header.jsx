//styles
import './HeaderStyle.css';
//images
import { logos } from '../../assets/assets_exports';
import useProductSelection from '../../features/products/store/product_selection.store';

const Header = ({ title }) => {
  const { cardProductSelection } = useProductSelection();
  return (
    <section
      className="header_component"
      style={{ display: cardProductSelection ? 'none' : 'flex' }}
    >
      {/* <img
        src={logos.CaliYa.IsoTipo}
        alt="caliya_logo"
        className="logo_header_component"
      /> */}
      <figure className="logos_header_component">
        <img
          src={logos.D_M_O.D_M_O_logo}
          alt="logo"
          className="image_header_component"
        />
      </figure>
      {title && <h1 className="title header">{title}</h1>}
    </section>
  );
};

export default Header;
