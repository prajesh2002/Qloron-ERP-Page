import React from "react";
import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Image,
  Button,
} from "react-bootstrap";
import logo from "../images/logo.jpg";
import "../styles/header.css";

function Header() {
  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="xl"
        className="bg-dark nav p-0 m-0"
        variant="dark"
        style={{textAlign:"center"}}
      >
        <Container fluid className="p-0 m-0">
          <Navbar.Brand href="#home" className="p-0 m-0">
            <Image
              src={logo}
              alt="QR Code"
              // fluid
              className="mt-0 mb-0 p-0 m-0"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto justify-content-between">
              <Nav.Link href="#home" className="home">
                HOME
              </Nav.Link>
              <NavDropdown title="ABOUT US" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">ABOUT-1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">ABOUT-2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">ABOUT-3</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="SERVICES & SUPPORT"
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">SERVICE-1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">SERVICE-2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">SERVICE-3</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#technologies">TECHNOLOGIES</Nav.Link>
              <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
              <Nav.Link href="#contactus">CONTACT US</Nav.Link>
              <Nav.Link href="#careers">CAREERS</Nav.Link>
              <Nav.Link href="#hiredevelopers">HIRE DEVELOPERS</Nav.Link>
            </Nav>
            <Nav className="ml-auto" style={{alignItems:"center"}}>
              <button className="sortbox-btn">SORTBOXS</button>
              <Nav.Link eventKey={2} href="#user" className="icon-link">
                <i className="fa-regular fa-user fa-xl icon"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
