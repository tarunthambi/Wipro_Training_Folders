import React, { useState } from 'react';
import './Toggle.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Toggle = ({ initialState = false, onToggle }) => {
    const [isOn, setIsOn] = useState(initialState);

    const handleToggle = () => {
        const newState = !isOn;
        setIsOn(newState);
        onToggle(newState);
    };

    return (
        <div className="toggle-container">
            <button 
                type="button" 
                className={`btn toggle-btn ${isOn ? 'btn-success' : 'btn-danger'}`} 
                onClick={handleToggle}
            >
                <span className={`toggle-switch ${isOn ? 'on' : ''}`}></span>
                <span className="toggle-text">{isOn ? 'ON' : 'OFF'}</span>
            </button>
            <h4 className="toggle-status">
                Your WiFi is {isOn ? 'On' : 'Off'}
            </h4>
        </div>
    );
};

export default Toggle;
