import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "./Assets/img/logo.png";
import { Link } from "react-router-dom";
import rp from "./Assets/img/rp.png";
import rs from "./Assets/img/rs.png";
import plus from "./Assets/img/plus.png";

const LoggedHeader = () => {
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
              <Nav.Link className="wallet">
                <img src={rp} alt="" />
                <Link to="">1500</Link>
              </Nav.Link>
              <Nav.Link>
                <img src={rs} alt="" />
                <span>1500</span>
                <Link to="">
                  <img src={plus} alt="" />
                </Link>
              </Nav.Link>
              <NavDropdown title="bharat" id="basic-nav-dropdown">
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>Another action</NavDropdown.Item>
                <NavDropdown.Item>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <i className="fa fa-power-off"></i>
                  <Link to="/">Logout</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default LoggedHeader;
