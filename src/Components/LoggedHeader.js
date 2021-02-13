import React, { useState, useEffect } from "react";
import {Redirect, useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Modal, Button } from "react-bootstrap";
import logo from "./Assets/img/logo.png";
import { Link } from "react-router-dom";
import rp from "./Assets/img/rp.png";
import rs from "./Assets/img/rs.png";
import plus from "./Assets/img/plus.png";
import walletYellow from "./Assets/img/wallet/wallet-icon.png";
import messageYellow from "./Assets/img/wallet/messages-icon.png";
import profileYellow from "./Assets/img/wallet/profile.png";
import accountYellow from "./Assets/img/wallet/account.png";
import user from "./Assets/img/dummyprofile.png";
const LoggedHeader = () => {
  let history = useHistory();
  const [show, setShow] = useState(false);
  const [user, setUser] = useState();
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  const handleCloseMain = (e) => {
    e.target.tagName == "A" ? setShow(false) : setShow(true);
  };
  const handleLogout = () =>{
    localStorage.removeItem("auth")
    history.push("/")
    window.location.reload()
  }

  //fetch user details
  useEffect(()=>{
    let auth = localStorage.getItem("auth")
    console.log(auth);
    fetch("https://5f4bdb2dea007b0016b1dc8b.mockapi.io/login").then((result)=>{
      result.json().then((res)=>{
          res.map((user)=>{
            if(user.id == auth){
              setUser(user.userName)
            }
          })
      })
    })
  }, [])
  return (
    <header>
      <Navbar expand="lg">
        <div className="container-fluid">
          <Navbar.Brand>
            <Link to="/home">
              <img src={logo} alt="/" />
            </Link>
            <div className="barnotification">
              <button onClick={handleOpen}>
                <i className="fa fa-bars"></i>
              </button>
              <button>
                <i className="fa fa-bell"></i>
              </button>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/home">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/home">live casino</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/home">poker</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/home">roulette</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/home">bingo</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/home">sports</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/home">cards</Link>
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
              <NavDropdown title={"User"} id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/wallet">
                    <img src={walletYellow} alt="" />
                    Wallet
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/wallet#message">
                    <img src={messageYellow} alt="" /> Messages
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="wallet/#profile">
                    <img src={profileYellow} alt="" />
                    Profile
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/wallet">
                    <img src={accountYellow} alt="" />
                    account
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/" onClick={handleLogout}>
                    <i className="fa fa-power-off"></i>
                    Logout
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="bars">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="left"
          className="bars-main"
        >
          <Modal.Header closeButton>
            <div className="user">
              <img src={user} alt="" />
              <span>Bharat5600</span>
            </div>
          </Modal.Header>
          <Modal.Body onClick={handleCloseMain}>
            <div className="lists">
              <img src={walletYellow} alt="" />
              <NavDropdown title="Wallet" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/wallet">statement</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/wallet">deposit</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="wallet/#profile">withdraw</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/wallet">referral</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="lists">
              <img src={messageYellow} alt="" />
              <NavDropdown title="Message" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/wallet">Wallet</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/wallet#message">Messages</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="wallet/#profile">Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/wallet">account</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="lists">
              <img src={profileYellow} alt="" />
              <Link to="/wallet">Profile</Link>
            </div>
            <div className="lists">
              <img src={accountYellow} alt="" />
              <Link to="/wallet">action</Link>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </header>
  );
};

export default LoggedHeader;
