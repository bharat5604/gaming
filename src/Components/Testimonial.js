import React from "react";
import facebook from "./Assets/img/footer/facebook.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import icon from "./Assets/img/footer/icon.png";
const Testimonial = () => {
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
    <div>
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
    </div>
  );
};

export default Testimonial;
