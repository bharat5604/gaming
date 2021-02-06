import React, { useState } from "react";
import { Navbar, Nav, Modal } from "react-bootstrap";
import logo from "./Assets/img/logo.png";
import { Link } from "react-router-dom";
import facebook from "./Assets/img/facebook.png";
import google from "./Assets/img/google.png";
import user from "./Assets/img/user.png";
import flag from "./Assets/img/flag.png";

const Header = () => {
  const [show, setShow] = useState(false);
  const [signup, setSignup] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSignUp = () => setSignup(true);
  const handleSignClose = () => setSignup(false);
  const handleLogin = (e) => {
    // setShow(false);
  };
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
                <button type="button" onClick={handleShow}>
                  sign in
                </button>
              </Nav.Link>
              <Nav.Link>
                <button className="signup" type="button" onClick={handleSignUp}>
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
      <div className="loginMain">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="login"
          data-dismiss="modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Sign in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="" method="post">
              <div className="form-group">
                <label htmlFor="username">UserName *</label>
                <input
                  type="text"
                  placeholder="UserName"
                  name="username"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password *</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" onClick={handleLogin}>
                  <Link to="/home">log in</Link>
                </button>
              </div>
              <div className="form-group forget">
                <p>
                  <input type="checkbox" /> remember me
                </p>
                <p>
                  <Link to="">Forgot Your password?</Link>
                </p>
              </div>
            </form>
          </Modal.Body>
          <div className="login__with">
            <div className="heading">
              <h3>
                <span>or login with</span>
              </h3>
            </div>
            <div className="apis">
              <Link to="">
                <img src={facebook} alt="" />
              </Link>
              <Link to="">
                <img src={google} alt="" />
              </Link>
            </div>
          </div>
          <div className="signup">
            <img src={user} alt="" />
            <p>No Account Yet?</p>
            <Link to="">Create An Account</Link>
          </div>
        </Modal>
      </div>
      <div className="signup">
        <Modal
          show={signup}
          onHide={handleSignClose}
          backdrop="static"
          keyboard={false}
          className="login"
        >
          <Modal.Header closeButton>
            <Modal.Title>Sign up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="">
              <div className="form-group">
                <label htmlFor="username">UserName *</label>
                <input
                  type="text"
                  placeholder="UserName"
                  name="username"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" placeholder="Email" name="email" required />
              </div>
              <div className="form-group number">
                <label htmlFor="phone">Phone Number *</label>
                <div className="mainFlag">
                  <div className="flag">
                    <img src={flag} alt="" />
                    <select name="number" id="">
                      <option value="91">+91</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="Phone"
                    name="password"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password *</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cpassword">Confirm Password *</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="cpassword"
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit">sign up</button>
              </div>
            </form>
          </Modal.Body>
          <div className="login__with">
            <div className="heading">
              <h3>
                <span>or signup with</span>
              </h3>
            </div>
            <div className="apis">
              <Link to="">
                <img src={facebook} alt="" />
              </Link>
              <Link to="">
                <img src={google} alt="" />
              </Link>
            </div>
          </div>
          <div className="signup">
            <img src={user} alt="" />
            <p>already registerd with us?</p>
            <Link
              to=""
              className="signin"
              onClick={(handleSignClose, handleShow)}
            >
              sign in
            </Link>
          </div>
        </Modal>
      </div>
    </header>
  );
};

export default Header;
