import React from "react";
import heart from "./Assets/img/heart.png";
import roulette from "./Assets/img/roulette.png";
import sports from "./Assets/img/sports.png";
import videoImage from "./Assets/img/winning/video-Image.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Winners from "./Winners";
import { winnersData } from "./WinnersData";
import Why from "./Why";
import Experience from "./Experience";
import GameProvider from "./GameProvider";
import Footer from "./Footer";

const Home = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    arrows: false,
    slidesToScroll: 1,
    vertical: true,
  };
  return (
    <div className="home">
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
      <div className="winning">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <div className="video">
                <div className="row">
                  <div className="col-md-7">
                    <img
                      src={videoImage}
                      className="img-fluid videoImg"
                      alt=""
                    />
                  </div>
                  <div className="col-md-5">
                    <div className="video__content">
                      <h3>more than games</h3>
                      <span>
                        In Gamepitara, <br /> We offer more than just games..
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="winnings__days">
                <h3>winnings of the day</h3>
                <Slider {...settings}>
                  {winnersData.map((winner, index) => (
                    <Winners
                      key={index}
                      img={winner.winnerImg}
                      name={winner.winnerName}
                      price={winner.winnerPrice}
                      game={winner.winnerGame}
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* why gamepitara */}
      <Why />

      {/* experience */}
      <Experience />

      {/* gameprovider */}
      <GameProvider />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
