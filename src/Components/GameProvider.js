import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import game1 from "./Assets/img/gameprovider/gane-providers-1.jpg";
import game2 from "./Assets/img/gameprovider/gane-providers-2.jpg";
import game3 from "./Assets/img/gameprovider/gane-providers-3.jpg";
import game4 from "./Assets/img/gameprovider/gane-providers-4.jpg";
import game5 from "./Assets/img/gameprovider/gane-providers-5.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GameProvider = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    // loop: true,
    autoplay: true,
    arrows: false,
    slidesToScroll: 1,
  };
  return (
    <div className="gameprovider">
      <div className="sliders">
        <Slider {...settings}>
          <img src={game1} alt="" />
          <img src={game2} alt="" />
          <img src={game3} alt="" />
          <img src={game4} alt="" />
          <img src={game5} alt="" />
        </Slider>
      </div>
    </div>
  );
};

export default GameProvider;
