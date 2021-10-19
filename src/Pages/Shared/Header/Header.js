import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React Diagnostic Center</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink className='link' to="/home">Home</NavLink>
                        <NavLink className='link' to="/about">About Us</NavLink>
                        <NavLink className='link' to="/services">Services</NavLink>
                        <NavLink className='link' to="/doctors">Specialists</NavLink>
                        <NavLink className='link' to="/contact">Contact Us</NavLink>
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Nav className="me-auto">

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;