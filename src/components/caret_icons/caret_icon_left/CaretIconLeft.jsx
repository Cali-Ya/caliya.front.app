import { RxCaretLeft } from 'react-icons/rx';
import './caret_icon_left.css';

const CaretIconLeft = ({ onClick, preferColor = true, className = '' }) => {
  return (
    <RxCaretLeft
      className={`caret_icon_left ${className}`}
      onClick={onClick}
      style={{
        color: preferColor
          ? 'var(--active-color-white)'
          : 'var(--active-color-black)',
      }}
    />
  );
};

export default CaretIconLeft;
