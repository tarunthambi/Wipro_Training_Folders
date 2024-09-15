import React from "react";
import './styles/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="mt-3">&copy; {new Date().getFullYear()} TaruNs Space. All Rights Reserved.</p>
          </div>
          <div className="col-md-6">
            <h5 className="text-warning">Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://facebook.com" className="text-warning">
                  <FaFacebook />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com" className="text-warning">
                  <FaTwitter />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://instagram.com" className="text-warning">
                  <FaInstagram />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://linkedin.com" className="text-warning">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
