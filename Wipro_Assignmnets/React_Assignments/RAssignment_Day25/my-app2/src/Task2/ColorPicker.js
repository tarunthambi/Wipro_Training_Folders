import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ColorPicker.css';

const ColorPicker = ({ onColorSelect }) => {
    const [selectedColor, setSelectedColor] = useState('#ffffff');

    function handleColorClick(event){
        setSelectedColor(event.target.value);
        onColorSelect(event.target.value);
    };

    return (
        <div className="color-picker">
            <div className='circle' style={{ backgroundColor: selectedColor}}>
                <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 10 10 L 90 10 L 90 20 L 60 20 L 60 90 L 40 90 L 40 20 L 10 20 Z"
                          fill={selectedColor} stroke="black" strokeWidth="2"/>
                </svg>
            </div>
            <div className="btn-group inside-block" role="group" aria-label="Color Picker">
                <label><b>Select a Color: </b></label><br/>
                <input type='color' value={selectedColor} onChange={handleColorClick}></input>
            </div>
        </div>
    );
};

export default ColorPicker;