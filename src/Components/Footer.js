import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import logo from "./Assets/img/logo.png";
import logo_footer from './Assets/img/Logo-footer.svg'
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
                    <Link to="">Online Casino Game</Link>
                  </li>
                  <li>
                    <Link to=""> Casino Slot Games</Link>
                  </li>
                  <li>
                    <Link to=""> Casino Table games</Link>
                  </li>
                  <li>
                    <Link to=""> Casino Bonus & Offers</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="foot">
                <h3>quick links</h3>
                <ul>
                  <li>
                    <Link to="">Online Casino Game</Link>
                  </li>
                  <li>
                    <Link to=""> Casino Slot Games</Link>
                  </li>
                  <li>
                    <Link to=""> Casino Table games</Link>
                  </li>
                  <li>
                    <Link to=""> Casino Bonus & Offers</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="foot last">
                <img src={logo_footer} alt="" />
                <p className="mb-2">connect with us</p>
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
