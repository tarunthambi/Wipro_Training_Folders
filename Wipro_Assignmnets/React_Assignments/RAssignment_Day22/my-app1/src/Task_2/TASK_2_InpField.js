import React, { useState } from 'react';
import './TASK_2_InpField.css'; 

const InputField = ({
  inputType = 'text',
  value,
  onChange,
  placeholder,
  label,
  showToggle = false,
}) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    onChange && onChange(value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-field">
      {label && <label>{label}</label>}
      <div className="input-container">
        <input
          type={inputType === 'password' && showPassword ? 'text' : inputType}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
        {inputType === 'password' && showToggle && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="toggle-password"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
