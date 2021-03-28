import React from "react";
import Baccarat_icon from "./Assets/img/Baccarat-Banner.png";
import BlackJack from "./Assets/img/BlackJack.png";
import Roulette_icon from "./Assets/img/Roulette-banner.png";
import Carousel from 'react-bootstrap/Carousel'

const HeroBanner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item style={{ 'height': "700px" }} className="home__banner" >
          <Carousel.Caption>
            <div>
              <div className="container">
                <div className="slots">
                  <h1>
                    live casino's, slot, <br /> bingo and more
                  </h1>
                  <span>all under single api</span>
                  <div className="icons">
                    <div className="item item1">
                      <img src={Baccarat_icon} alt="" />
                      <span>
                        Baccarat
                      </span>
                    </div>
                    <div className="item item2">
                      <img src={BlackJack} alt="" />
                      <span>BlackJack</span>
                    </div>
                    <div className="item item3">
                      <img src={Roulette_icon} alt="" />
                      <span>Roulette</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item  >
        <Carousel.Item style={{ 'height': "700px" }} className="home__banner_2" >
          <Carousel.Caption>
            <div>
              <div className="container">
                <div className="slots">
                  <h1>
                    PLAY VIRTUAL<br />FOOTBALL
                  </h1>
                  <span>Watch and Bet on all the Actions</span>
                  <div className="icons">
                    <button className="playnow_btn">
                      PLAY NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item  >
      </Carousel>

      {/* <div className="home__banner">
        <div className="container">
          <div className="slots">
            <h1>
              live casino's, slot, <br /> bingo and more
            </h1>
            <span>all under single api</span>
            <div className="icons">
              <div className="item item1">
                <img src={Baccarat_icon} alt="" />
                <span>
                  Baccarat
                </span>
              </div>
              <div className="item item2">
                <img src={BlackJack} alt="" />
                <span>BlackJack</span>
              </div>
              <div className="item item3">
                <img src={Roulette_icon} alt="" />
                <span>Roulette</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeroBanner;
