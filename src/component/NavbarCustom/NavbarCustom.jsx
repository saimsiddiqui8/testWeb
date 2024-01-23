// Install Bootstrap using npm
// npm install bootstrap
import React from 'react';
import AppButton from '../../reusable/AppButton/AppButton';
import { Navbar, Nav } from 'react-bootstrap';
import WebLogo from "../../../public/WebLogo.png"
import "./NavbarCustom.css"

const NavbarCustom = () => {
    return (
        <Navbar expand="lg" className='container'>
            <Navbar.Brand href="#home">
                <img src={WebLogo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto text-center">
                    <Nav.Link className='px-3 ' href="#home">Feature</Nav.Link>
                    <Nav.Link className='px-3' href="#about">Pricing</Nav.Link>
                    <Nav.Link className='px-3' href="#services">Listings</Nav.Link>
                </Nav>
                <div className="text-center">
                    <AppButton label="Dashboard" />
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarCustom;
