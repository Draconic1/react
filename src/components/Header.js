import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import logoImage from "../assets/logo1.svg";

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className="mb-5">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logoImage} alt="" height="50" />
                    <h2 className="d-inline-block mb-0 ms-2 align-middle" style={{ height: `50px` }}>Кинотеатр Бауманец</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;