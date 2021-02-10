import React from "react";
import { Link } from "react-router-dom";
import facebook from "./Assets/img/facebook.png";
import google from "./Assets/img/google.png";
import user from "./Assets/img/user.png";
import flag from "./Assets/img/flag.png";

const LoginSignup = (props) => {
  console.log(props);
  return (
    <div className="mainBody">
      {props.sign ? (
        <>
          <div className="loginBody">
            <form action="">
              <div className="form-group">
                <label htmlFor="username">Username *</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="username">Password *</label>
                <input type="password" />
              </div>
              <div className="form-group">
                <button type="submit">
                  <Link to="/home">log in</Link>
                </button>
              </div>
              <div className="remember">
                <div className="rememberme">
                  <p>
                    <input type="checkbox" /> <span>remember me</span>
                  </p>
                </div>
                <Link to="">forgot your password?</Link>
              </div>
            </form>
          </div>
          <div className="loginwith">
            <div className="heading">
              <h3>
                <span>or log in with</span>
              </h3>
            </div>
            <div className="images">
              <img src={facebook} alt="" />
              <img src={google} alt="" />
            </div>
          </div>
          <div className="accout">
            <img src={user} alt="" />
            <p>no account yet?</p>
            <Link to="">create an account</Link>
          </div>
        </>
      ) : (
        <>
          <div className="loginBody">
            <form action="">
              <div className="form-group">
                <label htmlFor="username">Username *</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <div className="phone">
                  <div className="sel">
                    <img src={flag} alt="" />
                    <select name="" id="">
                      <option value="">+91</option>
                    </select>
                  </div>
                  <input type="text" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password *</label>
                <input type="password" />
              </div>
              <div className="form-group">
                <label htmlFor="cpassword">Confirm Password *</label>
                <input type="password" />
              </div>
              <div className="form-group">
                <button type="submit">
                  <Link to="/home">sign up</Link>
                </button>
              </div>
              <div className="remember">
                <div className="rememberme">
                  <p>
                    <input type="checkbox" /> <span>remember me</span>
                  </p>
                </div>
                <Link to="">forgot your password?</Link>
              </div>
            </form>
          </div>
          <div className="loginwith">
            <div className="heading">
              <h3>
                <span>or sign up with</span>
              </h3>
            </div>
            <div className="images">
              <img src={facebook} alt="" />
              <img src={google} alt="" />
            </div>
          </div>
          <div className="accout">
            <img src={user} alt="" />
            <p>already an account?</p>
            <Link to="">sign in</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginSignup;
