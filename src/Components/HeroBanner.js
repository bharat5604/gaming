import React from "react";
import heart from "./Assets/img/heart.png";
import roulette from "./Assets/img/roulette.png";
import sports from "./Assets/img/sports.png";

const HeroBanner = () => {
  return (
    <div>
      <div className="home__banner">
        <div className="container">
          <div className="slots">
            <h1>
              live casino's, slot, <br /> bingo and more
            </h1>
            <span>all under single api</span>
            <div className="icons">
              <div className="item item1">
                <img src={heart} alt="" />
                <span>
                  Live <b>casino</b>
                </span>
              </div>
              <div className="item item2">
                <img src={roulette} alt="" />
                <span>roulette</span>
              </div>
              <div className="item item3">
                <img src={sports} alt="" />
                <span>sports</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
