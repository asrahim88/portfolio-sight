import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import './NavBar.css';



const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="nav-bg navShadow" variant="dark">
            <Container>
                <h1 className="text-white">Abdur Rahim</h1>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                    <Link to="/" className = "m-3 hover text-decoration-none size">Home</Link>
                        <Link to="/about" className = "m-3 hover text-decoration-none size">About</Link>
                        <Link to="/projects" className = "m-3 hover text-decoration-none size">Projects</Link>
                        <Link to="/blogs" className = "m-3 hover text-decoration-none size">Blog</Link>
                        <Link to="/contact" className = "m-3 hover text-decoration-none size">Contact</Link>
                        <Link to="/resume" className = "m-3 hover text-decoration-none size">Resume</Link>
                    </Nav>
                    <Nav className = "m-3 hoverDownload size">
                        <Nav.Link eventKey={2} href="https://drive.google.com/file/d/1Fa-oAbPTmv56KcIZf17kE5rXS-ULkQ_u/view?usp=sharing" target ="_blank">
                            Download Resume
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;