//css
import './primary_button_component.css';

const PrimaryButtonComponent = ({
  text = 'Button',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`primary_button_component ${className} ${
        disabled
          ? 'primary_button_component_disabled'
          : 'primary_button_component_enabled'
      }`}
    >
      {text}
    </button>
  );
};

export default PrimaryButtonComponent;
