import { RxCaretRight } from 'react-icons/rx';
import './caret_icon_right.css';

const CaretIconRigth = ({
  onClick,
  preferColor = true,
  type = 'caret',
  isCaretRight,
  className = '',
}) => {
  const Types = {
    expand: isCaretRight
      ? 'caret_icon_right_expanded--rotate'
      : 'caret_icon_right_expanded--starting',
    normal: 'caret_icon_right_normal',
  };

  return (
    <RxCaretRight
      className={`caret_icon_right ${Types[type]} ${className}`}
      onClick={onClick}
      style={{
        color: preferColor
          ? 'var(--active-color-white)'
          : 'var(--active-color-black)',
      }}
    />
  );
};

export default CaretIconRigth;
