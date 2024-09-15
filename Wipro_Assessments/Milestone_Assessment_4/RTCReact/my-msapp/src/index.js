import React from 'react';
import ReactDOM from 'react-dom/client'; // Update import
import App from './App';
import './styles/App.css';

// Create a root container
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
