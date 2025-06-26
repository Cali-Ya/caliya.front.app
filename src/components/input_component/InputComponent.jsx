//css
import { useState } from 'react';
import './input_component.css';
import clsx from 'clsx';

const InputComponent = ({
  id = 'id',
  label = 'label',
  type = 'text',
  value,
  disabled,
  onChange,
  onClick,
  onFocus,
  onBlur,
  placeholder = 'placeholder',
  autoComplete = 'on',
}) => {
  const [isMoveLabel, setIsMoveLabel] = useState(false);
  const [valueInputText, setValueInputText] = useState('');
  const ocuped_input = '';

  const handleMoveToplabel = () => {
    const move = true;
    setIsMoveLabel(move);
  };
  const handleMoveBottomlabel = () => {
    const move = false;
    setIsMoveLabel(move);
  };

  //handle props
  const handleBlur = (e) => {
    if (valueInputText.trim() === ocuped_input) {
      handleMoveBottomlabel();
      return;
    }
    if (onBlur) onBlur(e);
  };

  const handleFocus = (e) => {
    handleMoveToplabel();
    if (onFocus) onFocus(e);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
  };

  const handleChange = (e) => {
    const input_text = e.target.value;
    setValueInputText(input_text);
    if (onChange) onChange(e);

    if (valueInputText.trim() !== ocuped_input) {
      handleMoveToplabel();
      return;
    }
  };

  return (
    <div className="input_component">
      <label
        htmlFor={id}
        className={clsx('label_input_component', {
          'label_input_component--active': isMoveLabel,
          'label_input_component--inactive': !isMoveLabel,
        })}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="input_component__input"
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        autoComplete={autoComplete}
      />
    </div>
  );
};

export default InputComponent;
