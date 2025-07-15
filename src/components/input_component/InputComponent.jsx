//css
import './input_component.css';
//icons
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
//clsx
import clsx from 'clsx';
//react
import { useState } from 'react';

const InputComponent = ({
  id = 'id',
  label = 'label',
  type = 'text',
  disabled,
  onChange,
  onClick,
  onFocus,
  onBlur,
  placeholder,
  autoComplete = 'on',
  register,
  name = 'name',
  errors,
  rules = {},
  typePassword = false,
}) => {
  const [isMoveLabel, setIsMoveLabel] = useState(false);
  const [valueInputText, setValueInputText] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isUsingRegister = !!register && !!name;

  /* label animation */
  const handleMoveToplabel = () => {
    const move = true;
    setIsMoveLabel(move);
  };
  const handleMoveBottomlabel = () => {
    const move = false;
    setIsMoveLabel(move);
  };

  //handle props

  //blur
  const handleBlur = (e) => {
    const inputValue = e.target.value;
    if (inputValue.trim() === '') {
      handleMoveBottomlabel();
    }
    if (onBlur) onBlur(e);
  };

  //focus
  const handleFocus = (e) => {
    handleMoveToplabel();
    if (onFocus) onFocus(e);
  };

  //click
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
  };

  //change
  const handleChange = (e) => {
    if (!isUsingRegister) {
      const input_text = e.target.value;
      setValueInputText(input_text);
      if (onChange) onChange(e);
      if (input_text.trim() !== '') {
        handleMoveToplabel();
        return;
      }
    }
  };

  return (
    <div className="container_input_component">
      {/* component */}
      <div className="input_component">
        {/* label */}
        <label
          htmlFor={id}
          className={clsx('label_input_component', {
            'label_input_component--active': isMoveLabel,
            'label_input_component--inactive': !isMoveLabel,
            'label_input_component--error': errors && errors[name],
            'label_input_component--success':
              !(errors && errors[name]) &&
              ((isUsingRegister &&
                document.getElementsByName(name)[0]?.value?.trim().length >
                  0) ||
                (!isUsingRegister && valueInputText.trim().length > 0)),
          })}
        >
          {label}
        </label>

        {/* input */}
        <input
          className={clsx('input_component__input', {
            'input_component__input--active': isMoveLabel,
            'input_component__input--inactive': !isMoveLabel,
            'input_component__input--error': errors && errors[name],
            'input_component__input--success':
              !(errors && errors[name]) &&
              ((isUsingRegister &&
                document.getElementsByName(name)[0]?.value?.trim().length >
                  0) ||
                (!isUsingRegister && valueInputText.trim().length > 0)),
          })}
          id={id}
          type={typePassword && isPasswordVisible ? 'text' : type}
          {...(isUsingRegister
            ? {
                ...register(name, rules),
                disabled,
                placeholder,
                autoComplete,
                onClick: handleClick,
                onFocus: handleFocus,
                onBlur: handleBlur,
              }
            : {
                value: valueInputText,
                onChange: handleChange,
                disabled,
                placeholder,
                autoComplete,
                onClick: handleClick,
                onFocus: handleFocus,
                onBlur: handleBlur,
              })}
        />

        {/* type password active eyes */}
        {typePassword ? (
          isPasswordVisible ? (
            <IoMdEyeOff
              onClick={() => setIsPasswordVisible(false)}
              className="input_components__icons_eyes"
            />
          ) : (
            <IoMdEye
              onClick={() => setIsPasswordVisible(true)}
              className="input_components__icons_eyes"
            />
          )
        ) : null}
      </div>

      {/* errros */}
      {errors && errors[name] && (
        <p className="input_component__error">{errors[name].message}</p>
      )}
    </div>
  );
};

export default InputComponent;
