import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./Assets/img/logo.png";
import { Link,useHistory } from "react-router-dom";
import LoginSignup from "./LoginSignup";
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
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/">home</Link>
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
        <LoginSignup sign={text === "sign in"} />
      </div>
    </header>
  );
};

export default Header;
