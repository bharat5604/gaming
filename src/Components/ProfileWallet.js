import React, {useState, useEffect} from "react";
import LoggedHeader from "./LoggedHeader";
import { Tab, Row, Nav } from "react-bootstrap";
import walletWhite from "./Assets/img/wallet/wallet-white.png";
import messageYellow from "./Assets/img/wallet/messages-icon.png";
import profileYellow from "./Assets/img/wallet/profile.png";
import accountYellow from "./Assets/img/wallet/account.png";
import Wallet from "./Wallet";
import dummyprofile from "./Assets/img/dummyprofile.png";
import Message from './Message';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Footer from "./Footer";

const ProfileWallet = () => {
  const [name, setName] = useState()
  const [username, setUserName] = useState()
  const [email, setEmail] = useState()
  const [dob, setDob] = useState()
  const [mobile, setMobile] = useState()
  const [code, setCode] = useState()
  const [mode, setMode] = useState()
  const [update, setUpdate] = useState()
  let regId = localStorage.getItem('auth');
  const updateProfile = {Name:name, RegId:regId, Mobile:mobile, Mode:mode, Email:email, UserName:username, CountryCode:code, DOB:dob}
    // get profile data
    useEffect(()=>{
      let profile = {RegId:regId}
      fetch('http://gamepitara.globaldigitaz.com/api/get-profile-details', {
        method:"post",
        headers:{
          "Accept":"application/json",
          "Content-Type":"application/json"
        },
        body:JSON.stringify(profile)
      }).then((result)=>{
        result.json().then(res=>{
          // console.log(res[0]);
          res.map((item, index)=>{
            if(index === 0){
              setName(item.Name)
              setEmail(item.Email)
              setMobile(item.Mobile)
              setUserName(item.UserName)
              setDob(item.DOB)
              setCode(item.CounteryCode)
            }
          })
        })
      })
      console.log(window.location.href=="http://localhost:3000/wallet#message");
    }, [])

    //handleClick
    const handleClick = (e) =>{
      let fields = e.target.parentElement.children[0].textContent;
      if(fields=="phone number"){
        setMode("Mobile")
      } else if(fields =="D.O.B"){
        setMode("DOB")
      }
      e.target.previousElementSibling.children[0].disabled=false
      e.target.previousElementSibling.children[0].focus()
      if(e.target.className=="fa fa-pencil-square-o"){
        e.target.className="fa fa-check text-success"
      } else{
        e.target.className="fa fa-pencil-square-o"
      }
      if(e.target.className==="fa fa-pencil-square-o"){
        e.target.previousElementSibling.children[0].disabled=true
          //hide update
          setTimeout(() => {
            setUpdate()
          }, 3000);
        let url = "http://gamepitara.globaldigitaz.com/api/update-profile";
        fetch(url, {
          method:"POST",
          headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
          },
          body:JSON.stringify(updateProfile)
        }).then((result)=>{
          result.json().then(res=>{
            setUpdate(res.Result)
            console.log(res);
          })
        })
      }
    }

    //handleChangePassword
    const handlePassword = (e) =>{
      let input  = e.target.previousElementSibling;
      input.type="password"
      e.target.textContent="submit"
      if(!e.target.textContent==="submit"){
        console.log('changed');
        e.target.textContent="submit"
        input.type="hidden"
      } else{
        e.target.textContent="Change Password"
      }
      console.log(e.target.textContent=="submit");
    }

    //update profile data
    
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
                          <div className="result">
                            <h3>{update}</h3>
                          </div>
                          <div className="updates">
                          
                            <div className="item">
                              <span>username</span>
                              <span>{username}</span>
                              <i className="fa fa-check text-success"></i>
                            </div>
                            <div className="item">
                              <span>email</span>
                              <span>{email}</span>
                              <i className="fa fa-check text-success"></i>
                            </div>
                            <div className="item">
                              <span>phone number</span>
                              <span><input type="text" value={mobile} disabled autofocus onChange={(e)=> setMobile(e.target.value)} /></span>
                              <i className="fa fa-pencil-square-o" onClick={handleClick}></i>
                            </div>
                            <div className="item">
                              <span>D.O.B</span>
                              <span><input type="text" value={dob} onChange={(e)=> setDob(e.target.value)} disabled /></span>
                              <i className="fa fa-pencil-square-o" onClick={handleClick}></i>
                            </div>
                            <div className="password">
                            
                              <button type="button" onClick={handlePassword}>Change Password</button>
                            </div>
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
