import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import logo from "./Assets/img/logo.png";
import social from "./Assets/img/footer/social.png";
const Footer = () => {
  return (
    <>
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
