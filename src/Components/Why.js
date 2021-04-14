import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import whyImg1 from "./Assets/img/why/Badge-1.png";
import whyImg2 from "./Assets/img/why/Badge-2.png";
import whyImg3 from "./Assets/img/why/Badge-3.png";
import whyImg4 from "./Assets/img/why/Badge-4.png";
import rpb from "./Assets/img/rpb.png";
import level from "./Assets/img/level.png";
import pr1 from "./Assets/img/games/Auto--Roulette.jpg";
import pr2 from "./Assets/img/games/Baccarat.jpg";
import pr3 from "./Assets/img/games/Blackjack.jpg";
import pr4 from "./Assets/img/games/Casino-Hold.jpg";
import pr5 from "./Assets/img/games/Roulette.jpg";
import pr6 from "./Assets/img/games/Teen-Patti.jpg";
import LoginSignup from "./LoginSignup";
import { useStateValue } from './StateProvider'
import search_icon from './Assets/img/cards/search_icon.png'



const Why = (props) => {
  const [status, setStatus] = useState("open");
  const [open, setOpen] = useState("");
  const [text, setText] = useState("sign in");
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
  const [{ signature }, dispatch] = useStateValue();
  console.log(signature);
  const handleGames = async (e) => {

    let getGames ={
      GameUUId:e.target.dataset.id,
      PlayerId:"ANU001",
      PlayerName:"Anurag",
      Currency:"EUR",
      SessionId:"S001"
    }
    await fetch("http://gamepitara.globaldigitaz.com/api/LaunchGame", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(getGames)
    }).then(result=>{
      result.json().then(res => {
        let result = JSON.parse(res)
        let auth = localStorage.getItem('auth')
        console.log(auth == null);
        if(auth==null){
          setOpen("active")
        } else{
          window.open(result.url, '_blank')
        }
        
      })
    })
  }
  return (
    <div className="why" id={props.classType}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="tabs">
              <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
                <Tab eventKey="all" title="All">
                  <div className="all">
                    <img src={pr1}
                      alt=""
                      data-id="aad60e43266b22cf533ed73c720519f665d7fc0d"
                      onClick={handleGames}
                      className="img-fluid"
                    />
                    <img src={pr2}
                      alt=""
                      data-id="e864e7d293376c830c58d7ddddf9983f8d852718"
                      onClick={handleGames}
                      className="img-fluid"
                    />
                    <img src={pr6}
                      alt=""
                      data-id="743294d8a4e2ed636095c32bc6023c0669af9aab"
                      onClick={handleGames}
                      className="img-fluid"
                    />
                    <img src={pr6}
                      alt=""
                      data-id="743294d8a4e2ed636095c32bc6023c0669af9aab"
                      onClick={handleGames}
                      className="img-fluid"
                    />
                    <img src={pr6}
                      alt=""
                      data-id="743294d8a4e2ed636095c32bc6023c0669af9aab"
                      onClick={handleGames}
                      className="img-fluid"
                    />
                  </div>
                  <div className="all">
                    <img src={pr4}
                      alt=""
                      data-id="a01049481ef93f0b94a60bd1cb5e101e093d301f"
                      onClick={handleGames}
                      className="img-fluid"
                    />
                    <img src={pr5}
                      alt=""
                      data-id="74f63b2445644437ce446289753a4d14e2634942"
                      onClick={handleGames}
                      className="img-fluid"
                    />
                    <img src={pr3}
                      alt=""
                      data-id="743294d8a4e2ed636095c32bc6023c0669af9aab"
                      onClick={handleGames}
                      className="img-fluid"
                    />
                    <img src={pr6}
                      alt=""
                      data-id="a01049481ef93f0b94a60bd1cb5e101e093d301f"
                      onClick={handleGames}
                      className="img-fluid"
                    />
                    <img src={pr6}
                      alt=""
                      data-id="a01049481ef93f0b94a60bd1cb5e101e093d301f"
                      onClick={handleGames}
                      className="img-fluid"
                    />
                  </div>
                </Tab>
                <Tab eventKey="poker" title="Poker">
                  <div className="all">
                    <img src={pr1} alt="" />
                    <img src={pr2} alt="" />
                    <img src={pr3} alt="" />
                  </div>
                </Tab>
                {/* <Tab eventKey="Jackpot" title="Jackpot"></Tab> */}
                <Tab eventKey="Roulette" title="Roulette"></Tab>
                {/* <Tab eventKey="Lottery" title="Lottery"></Tab> */}
                <Tab eventKey="Football" title="Football"></Tab>
                <Tab eventKey="Blackjack" title="Blackjack"></Tab>
                {/* <Tab eventKey="Basketball" title="Basketball"></Tab> */}
                <Tab eventKey="Teenpatti" title="Teen Patti"></Tab>
                <Tab eventKey="Race" title="Race"></Tab>
                {/* <Tab eventKey="dragon" title="Dragon Tiger"></Tab>
                <Tab eventKey="baccarat" title="Baccarat"></Tab> */}
              </Tabs>
              <div className="search_tabs">
                <input className="btn search_input" placeholder="Search your game" />
                <img src={search_icon} className="search_icon" alt="search" />
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="loginsignup" id={open}>
        <div className="heading">
          <h3>{text}</h3>
          <i className="fa fa-close" onClick={handleClose}></i>
        </div>
        <LoginSignup sign={text === "sign in"} signup={text === "sign up"} />
      </div>
    </div>
  );
};

export default Why;
