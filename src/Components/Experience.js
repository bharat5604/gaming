import React from "react";
import img1 from "./Assets/img/experience/imag-1.jpg";
import img2 from "./Assets/img/experience/imag-2.jpg";
import img3 from "./Assets/img/experience/imag-3.jpg";

import { Link } from "react-router-dom";

import whyImg1 from "./Assets/img/why/Badge-1.png";
import whyImg2 from "./Assets/img/why/Badge-2.png";
import whyImg3 from "./Assets/img/why/Badge-3.png";
import whyImg4 from "./Assets/img/why/Badge-4.png";
import rpb from "./Assets/img/rpb.png";
import level from "./Assets/img/level.png";

const Experience = (props) => {
  return (
    <div className="experience">
      <div className="container">
        <div className="heading">
          <h3>Experience our games</h3>
          <span>Sit back relax and be amazed by our games today.</span>
        </div>
        <div className="images">
          <div className="row">
            <div className="col-sm-8">
              <div className="row">
                <div className="col-sm-4 mb-2">
                  <div className="images__in">
                    <img src={img1} className="img-fluid" alt="" />
                    <a href="#!">the dog house</a>
                  </div>
                </div>
                <div className="col-sm-4 mb-2">
                  <div className="images__in">
                    <img src={img2} className="img-fluid" alt="" />
                    <a href="#!">jackpot express</a>
                  </div>
                </div>
                <div className="col-sm-4 mb-2">
                  <div className="images__in">
                    <img src={img3} className="img-fluid" alt="" />
                    <a href="#!">the dog house</a>
                  </div>
                </div>
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
                          <img src={whyImg3} className="img-fluid" alt="" />
                          <div className="title">
                            <span>Mobile, dekstop.</span>
                            <h4>friendly</h4>
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
    </div>
  );
};

export default Experience;
