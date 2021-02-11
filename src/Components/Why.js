import React from "react";
import { Tabs, Tab } from "react-bootstrap";
// import Tabprop from "./TabProp";
import { Link } from "react-router-dom";
// import games from "./Assets/img/winning/sld1.png";
import whyImg1 from "./Assets/img/why/Badge-1.png";
import whyImg2 from "./Assets/img/why/Badge-2.png";
import whyImg3 from "./Assets/img/why/Badge-3.png";
import whyImg4 from "./Assets/img/why/Badge-4.png";
import rpb from "./Assets/img/rpb.png";
import level from "./Assets/img/level.png";
import pr1 from "./Assets/img/pr1.jpg";
import pr2 from "./Assets/img/pr2.jpg";
import pr3 from "./Assets/img/pr3.jpg";
import pr4 from "./Assets/img/pr4.jpg";
import pr5 from "./Assets/img/pr5.jpg";
import pr6 from "./Assets/img/pr6.jpg";

const Why = (props) => {
  return (
    <div className="why" id={props.classType}>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="tabs">
              <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
                <Tab eventKey="all" title="All">
                  <div className="all">
                    <img src={pr1} alt="" />
                    <img src={pr2} alt="" />
                    <img src={pr3} alt="" />
                  </div>
                  <div className="all">
                    <img src={pr4} alt="" />
                    <img src={pr5} alt="" />
                    <img src={pr6} alt="" />
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
