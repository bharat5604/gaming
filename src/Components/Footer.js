import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import icon from "./Assets/img/footer/icon.png";
import { Link } from "react-router-dom";
import facebook from "./Assets/img/footer/facebook.png";
import logo from "./Assets/img/logo.png";
import social from "./Assets/img/footer/social.png";
const Footer = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    slidesToScroll: 1,
    // vertical: true,
  };
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <div className="heading">
                <h3>what people are saying</h3>
              </div>
              <Slider {...settings}>
                <div>
                  <div className="para">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo, vel. Eligendi quod maiores recusandae sunt nostrum
                      soluta enim quas repellendus. Quis maxime eaque earum
                      deserunt, debitis assumenda neque quod? Dolorem dolore
                      quis exercitationem! Nihil
                    </p>
                  </div>
                  <div className="person">
                    <img src={icon} alt="" />
                    <div className="content">
                      <p>dayal gill </p>
                      <span>creative head</span>
                      <span> katnkrow studios</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="para">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo, vel. Eligendi quod maiores recusandae sunt nostrum
                      soluta enim quas repellendus. Quis maxime eaque earum
                      deserunt, debitis assumenda neque quod? Dolorem dolore
                      quis exercitationem! Nihil,
                    </p>
                  </div>
                  <div className="person">
                    <img src={icon} alt="" />
                    <div className="content">
                      <p>dayal gill </p>
                      <span>creative head</span>
                      <span> katnkrow studios</span>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="col-sm-7">
              <form action="">
                <div className="heading">
                  <h3>register with us</h3>
                </div>
                <div className="row">
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Game Name"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="New Password"
                    />
                  </div>
                </div>
                <div className="form-group btns">
                  <button type="button">submit</button>
                  <Link to="">Login</Link>
                  <a href="#!">
                    <img src={facebook} alt="" />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div className="btm__footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="foot">
                <img src={logo} alt="" />
                <p>
                  India best live casino <br /> slot & games
                </p>
                <p>18+ Be Responsible</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="foot">
                <h3>menu</h3>
                <ul>
                  <li>
                    <Link to="">Online Casino</Link>
                  </li>
                  <li>
                    <Link to=""> Casino Games</Link>
                  </li>
                  <li>
                    <Link to=""> Casino Slots Games</Link>
                  </li>
                  <li>
                    <Link to=""> Casino Table games</Link>
                  </li>
                  <li>
                    <Link to=""> Casino bonus & offer</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="foot">
                <h3>quick links</h3>
                <ul>
                  <li>
                    <Link to="">Online Casino</Link>
                  </li>
                  <li>
                    <Link to=""> Casino Games</Link>
                  </li>
                  <li>
                    <Link to=""> Casino Slots Games</Link>
                  </li>
                  <li>
                    <Link to=""> Casino Table games</Link>
                  </li>
                  <li>
                    <Link to=""> Casino bonus & offer</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="foot last">
                <img src={logo} alt="" />
                <p>connect with us</p>
                <br />
                <img src={social} className="img-fluid" width={200} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
