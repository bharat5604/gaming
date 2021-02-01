import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./Assets/img/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Navbar expand="lg">
        <div className="container-fluid">
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="">live casino</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="">poker</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="">roulette</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="">bingo</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="">sports</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="">cards</Link>
              </Nav.Link>
              <Nav.Link>
                <button type="button">sign in</button>
              </Nav.Link>
              <Nav.Link>
                <button className="signup" type="button">
                  sign up
                </button>
              </Nav.Link>
              <Nav.Link>
                <i className="fa fa-bars"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
