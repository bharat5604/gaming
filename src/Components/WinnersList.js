import React from "react";
import Slider from "react-slick";
import Winners from "./Winners";
import { winnersData } from "./WinnersData";
import videoImage from "./Assets/img/winning/video-Image.jpg";
import whyImg1 from "./Assets/img/why/Badge-1.png";
import whyImg2 from "./Assets/img/why/Badge-2.png";
import whyImg3 from "./Assets/img/why/Badge-3.png";
import whyImg4 from "./Assets/img/why/Badge-4.png";

const WinnersList = (props) => {
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
    <div>
      <div className="winning" id={props.classType}>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <div className="video">
                <div className="row">
                  <div className="col-md-7">
                  <img src={videoImage} className="img-fluid" alt=""/>
                   
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
              {!props.conditionRender ? (
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
              ) : (
                <div className="whyus">
                  <div className="heading">
                    <h3>why game pitara?</h3>
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnersList;
