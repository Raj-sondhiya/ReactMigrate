import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const MyNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            {/* <Navbar.Brand href="/">Migrate</Navbar.Brand> */}
            <Navbar.Brand><Link to="/" className="nav-link">Migrate</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/weather" className="nav-link">WeatherApp</Link>
                    <Link to="/news" className="nav-link">NewApp</Link>
                    <Link to="/fullcalendar" className="nav-link">FullCalendar</Link>
                    <Link to="/empmanagement" className="nav-link">Empmanagement</Link>
                </Nav>
                <Button variant="outline-light">Sign In</Button>
                {/* Add your Sign Up button or other navigation elements here */}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
