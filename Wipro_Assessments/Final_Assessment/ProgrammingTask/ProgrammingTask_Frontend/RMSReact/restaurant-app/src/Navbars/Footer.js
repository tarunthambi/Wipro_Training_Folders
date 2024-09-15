import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../Styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content text-center">
          <Col xs={12} md={6}>
            <p>&copy; {new Date().getFullYear()} HoneyDowDonots.2024 All rights reserved.</p>
          </Col>
          <Col xs={12} md={6} className="footer-links">
            <a href="/menu">
              Home
            </a>
            <a href="tarun@example.com">
              Email
            </a>
            <a href="+91-8654789532">
             +8654789532
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
