import React from 'react';
// import Toggle from '../../components/toggle/Toggle';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from "../../assets/icons/VictoriaTrans.svg";
import "./NavBar.css";
import "tachyons";

const NavBar = () => {

    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="md"
                fixed="top"
                className="animate-navbar nav-theme justify-content-between"
                variant="dark"
            >
                <Navbar.Brand href="#home">
                    <img className="logo grow" src={Logo} alt='Logo'/>
                </Navbar.Brand>
                <Navbar.Toggle className="navbar-toggle" aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        {/*<Toggle onClick={handleToggle} />*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;
