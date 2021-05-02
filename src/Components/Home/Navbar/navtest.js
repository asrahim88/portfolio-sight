import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from "react-bootstrap/Navbar";

const navtest = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="nav-bg navShadow" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><i className="fas fa-home f-color"></i>Abdur Rahim</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#features" className="m-3 hover">Home</Nav.Link>
                            <Nav.Link href="#features" className="m-3 hover">About</Nav.Link>
                            <Nav.Link href="#pricing" className="m-3 hover">Projects</Nav.Link>
                            <Nav.Link href="#pricing" className="m-3 hover">Resume</Nav.Link>
                        </Nav>
                        <Nav className="m-3 hover">
                            <Nav.Link eventKey={2} href="https://drive.google.com/file/d/1Fa-oAbPTmv56KcIZf17kE5rXS-ULkQ_u/view?usp=sharing" target="_blank">
                                Download Resume
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default navtest;