import { MdOutlineAddShoppingCart } from 'react-icons/md';

const IconAddShoppingCard = ({ onClick }) => {
  return (
    <MdOutlineAddShoppingCart
      className="icon_store_card_medium"
      style={{
        position: 'absolute',
        bottom: '1em',
        right: '0.5em',
        width: '35px',
        height: '35px',
        color: 'var(--active-color-white)',
        backgroundColor: 'var(--active-color-primary)',
        borderRadius: '50%',
        padding: '0.4em',
      }}
      onClick={onClick}
    />
  );
};

export default IconAddShoppingCard;
