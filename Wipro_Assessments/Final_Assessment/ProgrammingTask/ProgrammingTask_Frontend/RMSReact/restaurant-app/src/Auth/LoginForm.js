import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from './axios'; // Assuming axios is configured separately
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/LoginForm.css'; // Import the custom CSS file for additional styles

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    try {
      const response = await axios.post('/LogIn', { email, password });

      // Extract token and user info from response
      const { token, username } = response.data;

      // Store token and user info in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('userName', username);

      // Navigate to the home page
      navigate('/menu');
    } catch (error) {
      setError('Failed to login. Please check your credentials and try again.');
      console.error(error);
    }
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin} className="login-form">
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
