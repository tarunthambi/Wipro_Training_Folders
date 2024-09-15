import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Navbar.css'; // Import the custom CSS file

const CustomNavbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('userName');
  const role = localStorage.getItem('role');


  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('role');
    navigate('/login');
  };


  return (
    <Navbar expand="lg" className="navbar-custom" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/menu">
          HoneyDowDonots
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!token ? (
              <>
                <Nav.Link as={Link} to="/signup">
                  <Button variant="outline-light" className="me-2">Register</Button>
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  <Button variant="outline-light" className="me-2">Login</Button>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link>
                  <span className="text-light">Welcome {email}</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/profilepage">
                  <Button variant="outline-light">Profile</Button>
                </Nav.Link>
                {role === 'Admin' && (
                  <Nav.Link as={Link} to="/admin/dashboard">
                    <Button variant="outline-light" className="me-2">Dashboard</Button>
                  </Nav.Link>
                )}
                <Nav.Link>
                  <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
