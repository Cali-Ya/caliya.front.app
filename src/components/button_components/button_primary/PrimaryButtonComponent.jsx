//css
import Spinner from '../../spinner/Spinner';
import './primary_button_component.css';

const PrimaryButtonComponent = ({
  text = 'Button',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  toggleSpinner = false,
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
      {toggleSpinner ? <Spinner className="spinner_button_component" /> : text}
    </button>
  );
};

export default PrimaryButtonComponent;
