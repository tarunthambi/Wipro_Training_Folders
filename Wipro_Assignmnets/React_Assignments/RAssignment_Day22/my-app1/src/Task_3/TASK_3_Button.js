import React from 'react';
import './TASK_3_Button.css'; 

const Button = ({ label, color, size, onClick }) => {
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'btn-small';
      case 'medium':
        return 'btn-medium';
      case 'large':
        return 'btn-large';
      default:
        return 'btn-medium'; 
    }
  };

  const getColorClass = () => {
    switch (color) {
      case 'primary':
        return 'btn-primary';
      case 'secondary':
        return 'btn-secondary';
      default:
        return 'btn-primary';
    }
  };

  return (
    <button className={`btn ${getSizeClass()} ${getColorClass()}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
