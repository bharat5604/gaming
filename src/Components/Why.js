import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import Tabprop from "./TabProp";
import games from "./Assets/img/winning/sld1.png";
import whyImg1 from "./Assets/img/why/Badge-1.png";
import whyImg2 from "./Assets/img/why/Badge-2.png";
import whyImg3 from "./Assets/img/why/Badge-3.png";
import whyImg4 from "./Assets/img/why/Badge-4.png";

const Why = () => {
  return (
    <div className="why">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="tabs">
              <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
                <Tab eventKey="all" title="All">
                  <Tabprop games={games} />
                </Tab>
                <Tab eventKey="poker" title="Poker">
                  <Tabprop games={games} />
                </Tab>
                <Tab eventKey="roulette" title="Roulette"></Tab>
                <Tab eventKey="dragon" title="Dragon Tiger"></Tab>
                <Tab eventKey="baccarat" title="Baccarat"></Tab>
                <Tab eventKey="sports" title="Sportsbook"></Tab>
              </Tabs>
            </div>
          </div>
          <div className="col-sm-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
