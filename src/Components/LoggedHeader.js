import React, { useState, useEffect } from "react";
import {Redirect, useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Accordion, Card } from "react-bootstrap";
import logo from "./Assets/img/logo.png";
import { Link } from "react-router-dom";
import rp from "./Assets/img/rp.png";
import rs from "./Assets/img/rs.png";
import plus from "./Assets/img/plus.png";
import walletYellow from "./Assets/img/wallet/wallet-icon.png";
import messageYellow from "./Assets/img/wallet/messages-icon.png";
import profileYellow from "./Assets/img/wallet/profile.png";
import accountYellow from "./Assets/img/wallet/account.png";
import users from "./Assets/img/dummyprofile.png";
import home from './Assets/img/icons/home.png'
import cards from './Assets/img/icons/cards.png'
import jackpot from './Assets/img/icons/jackpot.png'
import livedealer from './Assets/img/icons/livedealer.png'
import poker from './Assets/img/icons/poker.png'
import roullete from './Assets/img/icons/roullete.png'
import slots from './Assets/img/icons/slots.png'
import table from './Assets/img/icons/table.png'
const LoggedHeader = () => {
  let history = useHistory();
  const [user, setUser] = useState();
  const [active, setActive] = useState("")
  const [profile, setProfile] = useState({})
  let auth = localStorage.getItem("auth")
  let url = "http://gamepitara.globaldigitaz.com/api/get-profile-details";
  const handleOpen = () =>{
    setActive("active")

  }
  //handleClose
  const handleClose = () => {
    setActive("")
  }
  const handleLogout = () =>{

    localStorage.removeItem("auth")
    localStorage.removeItem("name")
    // if(localStorage.getItem("name")){ localStorage.removeItem("name") }
    
    history.push("/")
    window.location.reload()
  }


  useEffect(()=>{
    let profile = {RegId:auth}
    fetch(url, {
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(profile)
    }).then(result=>{
      result.json().then(res=>{
        console.log(res[0]);
        if(res[0] !== undefined){
          setProfile({
            username:res[0].UserName,
            profileImg:res[0].ProfileImage
          })
          
        } else if(res[0] == undefined & auth !== undefined){
          // window.location.reload()
        }
      })
    })
  }, [useHistory])
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
            <Link to="/">
                <img src={home} alt="home"/>
                home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="">
                <img src={cards} alt="home"/>
                Cards
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="">
                <img src={jackpot} alt="home"/>
                jackpot games
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="">
                <img src={roullete} alt="home"/>
                roulette
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="">
                <img src={poker} alt="home"/>
                poker
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="">
                <img src={slots} alt="home"/>
                slots
                </Link>
              </Nav.Link>
              <Nav.Link>
                <img src={table} alt="home"/>
                <Link to="">table</Link>
              </Nav.Link>
              <Nav.Link>
                <img src={livedealer} alt="home"/>
                <Link to="">live dealers</Link>
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
              <NavDropdown title={!localStorage.getItem("name") ? "user" : localStorage.getItem("name").split(" ")[0]} id="basic-nav-dropdown">
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
      <div className="bars" id={active}>
        <div className="heading">
          <img src={profile.profileImg ==undefined ? profile.profileImg : users} alt=""/>
          <span>{!profile.username ? "user" : profile.username}</span>
          <i className="fa fa-close" onClick={handleClose}></i>
        </div>
        <div className="bars__body">
          <div className="list">
          <Accordion eventKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <h3><img src={walletYellow} alt=""/> <span>Wallet</span> <i className="fa fa-chevron-down"></i></h3>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Link to="/wallet">statement</Link>
                  <Link to="/wallet">deposit</Link>
                  <Link to="/wallet">withdraw</Link>
                  <Link to="/wallet">referral</Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
              <h3><img src={messageYellow} alt=""/> <span>message</span> <i className="fa fa-chevron-down"></i></h3>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
              <Card.Body>
                  <Link to="/wallet">statement</Link>
                  <Link to="/wallet">deposit</Link>
                  <Link to="/wallet">withdraw</Link>
                  <Link to="/wallet">referral</Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <h3><img src={profileYellow} alt=""/> <span>profile</span></h3>
          <h3><img src={accountYellow} alt=""/> <span>Account</span></h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LoggedHeader;
