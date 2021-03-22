import React, {useState} from "react";
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
import $ from "jquery"
import {useStateValue} from './StateProvider'


const Why = (props) => {
  const [{signature}, dispatch] = useStateValue();
  console.log(signature);

  let baseUrl = "http://gamepitara.globaldigitaz.com/api/GetXSignForGameInit"
  const handleGames = async (e) =>{

    // dispatch
    let getSignData = {GameUUId:e.target.dataset.id, PlayerId:"ANU001", PlayerName:"Anurag", Currency:"EUR", SessionId:"S001"}
    let getGames = {game_uuid:getSignData.GameUUId, player_id:getSignData.PlayerId, player_name:getSignData.PlayerName, currency:getSignData.Currency, session_id:getSignData.SessionId}
    // fetch
   await fetch(baseUrl, {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(getSignData)
    }).then( (result) => {
      result.json().then(res =>{
        console.log(res);
         signature[0].xsign = res.XSign
         signature[0].timestamp = res.TimeStamp
         signature[0].xnonce = res.XNonce
      })
    })
    // await fetch("https://staging.slotegrator.com/api/index.php/v1/games/init-demo", {
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/x-www-form-urlencoded",
    //     "x-merchant-id": "3675a5fa309b2a7fc72e588dfca8089d",
    //     "x-sign": signature[0].xsign,
    //     "x-timestamp": signature[0].timestamp,
    //     "x-nonce": signature[0].xnonce,
    //   },
    //   body:JSON.stringify(getGames)
    // }).then(result=>{
    //   result.json().then(res => {
    //     console.log(res);
    //   })
    // })

    $(document).ready(function () {
      var form = new FormData();
      form.append("game_uuid", e.target.dataset.id);
      form.append("player_id", "ANU001");
      form.append("player_name", "Anurag");
      form.append("currency", "EUR");
      form.append("session_id", "S001");

      var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://staging.slotegrator.com/api/index.php/v1/games/init-demo",
          "method": "POST",
          "headers": {
                 "x-merchant-id": "3675a5fa309b2a7fc72e588dfca8089d",
                 "x-sign": signature[0].xsign,
                 "x-timestamp": signature[0].timestamp,
                 "x-nonce": signature[0].xnonce,
          },
          "processData": false,
          "contentType": false,
          "mimeType": "multipart/form-data",
          "data": form
      }

      $.ajax(settings).done(function (response) {
        let url = JSON.parse(response)
        window.open(url.url, '_blank')
        console.log(url.url);
      });
  });

    // $(document).ready(function () {
    //   $.ajax(signature).done(function (res) {
    //   });
    //     var form = new FormData();
    //     form.append("game_uuid", e.target.dataset.id);
    //     form.append("language", "en")
    //     // form.append("player_id", "ANU001");
    //     // form.append("player_name", "Anurag");
    //     // form.append("currency", "EUR");
    //     // form.append("session_id","S001");
    //     var settings = {
    //         "async": true,
    //         "crossDomain": true,
    //         "url": "https://staging.slotegrator.com/api/index.php/v1/games/init-demo",
    //         "method": "POST",
    //         "headers": {
    //             "x-merchant-id": "3675a5fa309b2a7fc72e588dfca8089d",
    //             "x-sign": signature[0].xsign,
    //             "x-timestamp": signature[0].timestamp,
    //             "x-nonce": signature[0].xnonce,
    //         },
    //         "processData": false,
    //         "contentType": false,
    //         "mimeType": "multipart/form-data",
    //         "data": form
    //     }
    //     $.ajax(settings).done(function (response) {
    //         console.log(JSON.parse(response));
    //        let url = JSON.parse(response)
    //         window.open(url.url, '_blank')
    //     });
    // });
  }
  return (
    <div className="why" id={props.classType}>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="tabs">
              <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
                <Tab eventKey="all" title="All">
                  <div className="all">
                    <div className="col-lg-4 col-md-4">
                    <img src={pr1} 
                    alt=""
                     data-id="aad60e43266b22cf533ed73c720519f665d7fc0d"
                    onClick={handleGames}
                      className="img-fluid"
                    />
                    </div>
                    <div className="col-lg-4">
                    <img src={pr2}
                     alt=""
                     data-id="e864e7d293376c830c58d7ddddf9983f8d852718"
                    onClick={handleGames}
                      className="img-fluid"
                    />
                    </div>
                    <div className="col-md-4">
                    <img src={pr3}
                     alt=""
                     data-id="0b4fa51ec8a659c2702e30acbf8afebff470bb5d"
                    onClick={handleGames} 
                      className="img-fluid"
                    />
                    </div>
                  </div>
                  <div className="all">
                    <div className="col-md-4">
                    <img src={pr4}
                     alt=""
                     data-id="a01049481ef93f0b94a60bd1cb5e101e093d301f"
                     onClick={handleGames} 
                     className="img-fluid"
                       />
                    </div>
                    <div className="col-md-4">
                    <img src={pr5}
                     alt=""
                    data-id="74f63b2445644437ce446289753a4d14e2634942"
                    onClick={handleGames} 
                    className="img-fluid"
                      />
                    </div>
                    <div className="col-md-4">
                    <img src={pr6}
                     alt=""
                     data-id="743294d8a4e2ed636095c32bc6023c0669af9aab"
                     onClick={handleGames} 
                     className="img-fluid"
                      />
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="poker" title="Poker">
                  <div className="all">
                    <img src={pr1} alt="" />
                    <img src={pr2} alt="" />
                    <img src={pr3} alt="" />
                  </div>
                </Tab>
                <Tab eventKey="roulette" title="Roulette"></Tab>
                <Tab eventKey="dragon" title="Dragon Tiger"></Tab>
                <Tab eventKey="baccarat" title="Baccarat"></Tab>
                <Tab eventKey="sports" title="Sportsbook"></Tab>
              </Tabs>
            </div>
          </div>
          <div className="col-sm-4">
            {!props.rightPart ? (
              <div className="why__us">
                <div className="heading">
                  <h3>why gamepitara?</h3>
                </div>
                <div className="img">
                  <div className="row">
                    <div className="col-6">
                      <div className="img__in">
                        <img src={whyImg1} className="img-fluid" alt="" />
                        <div className="title">
                          <span>innovative products</span>
                          <h4>design to entertained</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="img__in">
                        <img src={whyImg2} className="img-fluid" alt="" />
                        <div className="title">
                          <span>licensed &</span>
                          <h4>trusted</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="img__in">
                        <img src={whyImg3} className="img-fluid" alt="" />
                        <div className="title">
                          <span>Mobile, dekstop.</span>
                          <h4>friendly</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="img__in">
                        <img src={whyImg4} className="img-fluid" alt="" />
                        <div className="title">
                          <span>award winning</span>
                          <h4>content</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="loggedRight">
                <div className="rpb">
                  <img src={rpb} alt="" />
                  <span>7000</span>
                  <h3>royality points</h3>
                </div>
                <div className="level">
                  <img src={level} alt="" />
                  <div className="level__content">
                    <h3>gold</h3>
                    <p>
                      Next class after 3000 <img src={rpb} alt="" />
                    </p>
                  </div>
                </div>
                <div className="wallet">
                  <Link to="">deposit</Link>
                  <Link to="">withdraw</Link>
                  <Link to="">profile</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
