import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <div className="hero-section bg-primary text-white text-center py-5">
        <div className="hero-content">
          <h1 className="display-4">Welcome to HoneyDowDonots Multicusine Restaurant</h1>
          <p className="lead">Here you can order the delicious food and enjoy your day.</p>
          <div className="hero-buttons mt-4">
            <button className="btn btn-light me-2" onClick={handleLogin}>Login</button>
            <button className="btn btn-outline-light" onClick={handleSignUp}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
