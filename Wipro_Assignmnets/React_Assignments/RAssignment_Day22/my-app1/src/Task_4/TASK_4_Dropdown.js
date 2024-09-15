import React, { useState, useEffect } from 'react';
import './TASK_4_Dropdown.css'; 

const Dropdown = ({ options, multiple, maxSelection }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [error, setError] = useState('');
  const [disableDropdown, setDisableDropdown] = useState(false);

  // Check if maxSelection is more than available options on initial render
  useEffect(() => {
    if (maxSelection > options.length) {
      setError(`Max selection (${maxSelection}) is more than the available options (${options.length}).`);
      setDisableDropdown(true); // disables the dropdown
    } else {
      setError(''); 
      setDisableDropdown(false); // Enable the dropdown
    }
  }, [maxSelection, options.length]);

  const handleProductChange = (event) => {
    const selectedOption = event.target.value;


    if (multiple) {
      if (selectedProducts.includes(selectedOption)) {
        setSelectedProducts(selectedProducts.filter(product => product !== selectedOption));
        setError(''); 
      } else if (selectedProducts.length < maxSelection) {
        setSelectedProducts([...selectedProducts, selectedOption]);
        setError(''); 
      } else {
        setError(`Max selection limit is ${maxSelection}.`); 
      }
    } else {
      setSelectedProducts([selectedOption]);
      setError('');
    }
  };

  return (
    <div id="dropdown-container">
      <div id="product-window">
        {selectedProducts.map((product, index) => (
          <div key={index} className="product-box">{product}</div>
        ))}
      </div>
      <select id="product-dropdown" onChange={handleProductChange} value="" disabled={disableDropdown} >
        <option value="" disabled>Select a product</option>
        {options.map((product) => (
          <option key={product} value={product}>
            {product}
          </option>
        ))}
      </select>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Dropdown;
