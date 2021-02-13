import React from "react";
import LoggedHeader from "./LoggedHeader";
import { Tab, Row, Nav } from "react-bootstrap";
import walletWhite from "./Assets/img/wallet/wallet-white.png";
import messageYellow from "./Assets/img/wallet/messages-icon.png";
import profileYellow from "./Assets/img/wallet/profile.png";
import accountYellow from "./Assets/img/wallet/account.png";
import Wallet from "./Wallet";
import dummyprofile from "./Assets/img/dummyprofile.png";
import Message from './Message';

import Footer from "./Footer";

const ProfileWallet = () => {
  return (
    <div>
      <LoggedHeader />
      {/* banner */}
      <div className="banner">
        {/* <img src={dbBanner} className="img-fluid" alt="" /> */}
        <div className="container">
          <div className="mainTabs">
            <div className="abs">
              <Tab.Container id="left-tabs-example" defaultActiveKey="wallet">
                <Row>
                  <div className="col-sm-3">
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="wallet">
                          <img src={walletWhite} alt="" />
                          <span>Wallet</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="message">
                          <img src={messageYellow} alt="" />
                          <span>message</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="profile">
                          <img src={profileYellow} alt="" />
                          <span>Profile</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="account">
                          <img src={accountYellow} alt="" />
                          <span>account</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <div className="col-sm-8 offset-1">
                    <Tab.Content>
                      <Tab.Pane eventKey="wallet">
                        <Wallet />
                      </Tab.Pane>
                      <Tab.Pane eventKey="message">
                        <Message />
                      </Tab.Pane>
                      <Tab.Pane eventKey="profile">
                        <div className="profile">
                          <div className="ppicture">
                            <img src={dummyprofile} alt="" />
                            <span>change picture</span>
                            <p>remove</p>
                          </div>
                          {/* updates */}
                          <div className="updates">
                            <div className="item">
                              <span>username</span>
                              <span>bharat</span>
                              <i className="fa fa-pencil-square-o"></i>
                            </div>
                            <div className="item">
                              <span>email</span>
                              <span>bhushansingh696@gmail.com</span>
                              <i className="fa fa-pencil-square-o"></i>
                            </div>
                            <div className="item">
                              <span>phone number</span>
                              <span>+91 9199 886 799</span>
                              <i className="fa fa-pencil-square-o"></i>
                            </div>
                            <div className="item">
                              <span>D.O.B</span>
                              <span>26/01/1996</span>
                              <i className="fa fa-pencil-square-o"></i>
                            </div>
                            <button>Change Password</button>
                          </div>
                          {/* updates */}
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
      <div className="background"></div>

      <Footer />
    </div>
  );
};

export default ProfileWallet;
