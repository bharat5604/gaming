import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./Assets/img/logo.png";
import { Link, useHistory, BrowserRouter as Router } from "react-router-dom";
import LoginSignup from "./LoginSignup";
import home from './Assets/img/icons/home.png'
import cards from './Assets/img/icons/cards.png'
import jackpot from './Assets/img/icons/jackpot.png'
import livedealer from './Assets/img/icons/livedealer.png'
import poker from './Assets/img/icons/poker.png'
import roullete from './Assets/img/icons/roullete.png'
import slots from './Assets/img/icons/slots.png'
import table from './Assets/img/icons/table.png'
import Sports from './Assets/img/icons/Sports.png'

const Header = () => {
  const [status, setStatus] = useState("open");
  const [open, setOpen] = useState("");
  const [text, setText] = useState();
  useEffect(() => {
    // if (open == "active") {
    //   let b = (document.body.style.overflow = "hidden");
    // } else {
    //   document.body.style.overflowY = "scroll";
    // }
  });
  const handleShow = (e) => {
    setText(e.target.textContent);
    switch (status) {
      case "open":
        setOpen("active");
        setStatus("close");
        break;
      case "close":
        setOpen("");
        setStatus("open");
        break;
    }
  };

  const handleClose = () => {
    switch (status) {
      case "open":
        setOpen("");
        setStatus("close");
        break;
      case "close":
        setOpen("");
        setStatus("open");
        break;
    }
  };
  return (
    <header>
      <Navbar expand="lg">
        <Container fluid className="p-0">
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/">
                  <img src={home} alt="home" />
                  home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/cards">
                  <img src={cards} alt="home" />
                  Cards
                </Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Link to="">
                <img src={jackpot} alt="home"/>
                jackpot games
                </Link>
              </Nav.Link> */}
              <Nav.Link>
                <Link to="/roulette">
                  <img src={roullete} alt="home" />
                  roulette
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/pocker">
                  <img src={poker} alt="poker" />
                  poker
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="">
                  <img src={jackpot} alt="home" />
                  Fast Games
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="">
                  <img src={Sports} alt="home" />
                  Sports
                </Link>
              </Nav.Link>
              <Nav.Link>
                <img src={livedealer} alt="home" />
                <Link to="">live dealers</Link>
              </Nav.Link>
              {/* <Nav.Link>
                <img src={table} alt="home" />
                <Link to="">table</Link>
              </Nav.Link> */}
              <Nav.Link>
                <Link to="">
                  <img src={slots} alt="slots" />
                  slots
                </Link>
              </Nav.Link>


              <Nav.Link>
                <button type="button" onClick={handleShow}>
                  sign in
                </button>
              </Nav.Link>
              <Nav.Link>
                <button className="signup" type="button" onClick={handleShow}>
                  sign up
                </button>
              </Nav.Link>
              {/* <Nav.Link>
                <i className="fa fa-bars"></i>
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* login signup */}
      <div className="loginsignup" id={open}>
        <div className="heading">
          <h3>{text}</h3>
          <i className="fa fa-close" onClick={handleClose}></i>
        </div>
        <LoginSignup sign={text === "sign in"} signup={text === "sign up"} />
      </div>
    </header>
  );
};

export default Header;
