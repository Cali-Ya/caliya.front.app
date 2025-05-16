//css
import './secondary_button_component.css';

const SecondaryButtonComponent = ({
  text = 'Button',
  onClick,
  type = 'button',
  disabled = true,
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`secondary_button_component ${className}`}
    >
      {text}
    </button>
  );
};

export default SecondaryButtonComponent;
