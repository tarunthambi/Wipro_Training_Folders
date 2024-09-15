import React, { useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Signup.css'; 

const SignupForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    Password: '',
    role: 'User'
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5290/api/Auth/register', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert('User Registered Successfully!');
      navigate('/login');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.Message) {
        setError(err.response.data.Message);
      } else {
        setError('An error occurred while registering.');
      }
    }
  };

  return (
    <Container className="signup-container">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <h2 className="text-center mb-4">Signup</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUserName" className="mb-3">
              <Form.Label>UserName:</Form.Label>
              <Form.Control
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="Enter your username"
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="Password"
                value={formData.Password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupForm;
