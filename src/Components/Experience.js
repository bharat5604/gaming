import React from "react";
import img1 from "./Assets/img/experience/imag-1.jpg";
import img2 from "./Assets/img/experience/imag-2.jpg";
import img3 from "./Assets/img/experience/imag-3.jpg";

const Experience = () => {
  return (
    <div className="experience">
      <div className="container">
        <div className="heading">
          <h3>Experience our games</h3>
          <span>Sit back relax and be amazed by our games today.</span>
        </div>
        <div className="images">
          <div className="row">
            <div className="col-sm-4">
              <div className="images__in">
                <img src={img1} className="img-fluid" alt="" />
                <a href="#!">the dog house</a>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="images__in">
                <img src={img2} className="img-fluid" alt="" />
                <a href="#!">jackpot express</a>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="images__in">
                <img src={img3} className="img-fluid" alt="" />
                <a href="#!">the dog house</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
