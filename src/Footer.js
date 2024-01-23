// Footer.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="mt-5 bg-light">
            <Container>
                <Row>
                    <Col md={4} className="text-dark">
                        <h5>About Us</h5>
                        <p>WebKorps is an IT Consulting and development company providing IT services to businesses across the world. WebKorps is an organization driven by creativity and enthusiasm. We at WebKorps believe in teamwork. With every new day, the quest for acquiring new competencies continues. Forever se ... see more</p>
                    </Col>
                    <Col md={4} className="text-dark">
                        <h5>Contact Us</h5>
                        <p>Email: pranayshriwas420@gmail.com</p>
                        <p>Phone: +91 7999282283</p>
                    </Col>
                    <Col md={4} className="text-dark">
                        <h5>Follow Us</h5>
                        <p>Connect with us on social media:</p>
                        <div className="social-icons">
                            <a href="https://twitter.com/your-twitter-account" target="_blank" rel="noopener noreferrer" className="text-dark">
                                <FaTwitter />
                            </a>
                            <a href="https://www.instagram.com/hindu__sarkar_/" target="_blank" rel="noopener noreferrer" className="text-dark">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/pranay-shriwas/" target="_blank" rel="noopener noreferrer" className="text-dark">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/PranayShriwas" target="_blank" rel="noopener noreferrer" className="text-dark">
                                <FaGithub />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="text-center py-3 bg-dark text-white">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
