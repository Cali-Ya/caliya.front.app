//css
import './primary_button_component.css';

const PrimaryButtonComponent = ({
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
      className={`primary_button_component ${className}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButtonComponent;
