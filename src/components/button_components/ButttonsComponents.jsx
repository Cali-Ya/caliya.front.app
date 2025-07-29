//css
import './buttons_components.css';
//components
import Spinner from '../spinner/Spinner';

export const ButtonPrimary = ({
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
      id="button_primary"
      className={`buttons_medium button_primary ${className} ${
        disabled ? 'button_component_disabled' : 'button_component_enabled'
      } ${toggleSpinner ? 'spinner_button_on' : 'spinner_button_off'}`}
    >
      {toggleSpinner ? <Spinner className="spinner_buttons" /> : text}
    </button>
  );
};

export const ButtonSecondary = ({
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
      id="button_secondary"
      className={`buttons_medium button_secondary ${className} ${
        disabled ? 'button_component_disabled' : 'button_component_enabled'
      } ${toggleSpinner ? 'spinner_button_on' : 'spinner_button_off'}`}
    >
      {toggleSpinner ? <Spinner className="spinner_buttons" /> : text}
    </button>
  );
};
