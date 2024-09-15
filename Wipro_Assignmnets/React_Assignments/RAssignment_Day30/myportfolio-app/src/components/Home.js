// src/components/Home.js
import React from 'react';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Hi There,</h1>
        <h1>I'm Tarun Thambi</h1>
        <h4>I am into .Net React Developer</h4>
        <a href="/portfolio" className="btn btn-primary">View My Work</a>
      </div>
    </div>
  );
};

export default Home;

