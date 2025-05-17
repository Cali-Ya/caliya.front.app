import { RxCaretRight } from 'react-icons/rx';
import './caret_icon_right.css';

const CaretIconRigth = ({
  onClick,
  preferColor = true,
  type = 'caret',
  isCaretRight,
}) => {
  const Types = {
    dropdown: isCaretRight
      ? 'caret_icon_right_dropdown--rotate'
      : 'caret_icon_right_dropdown--starting',
    normal: 'caret_icon_right_normal',
  };

  return (
    <RxCaretRight
      className={`caret_icon_right caret_right_children ${Types[type]}`}
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
