import React, { useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import facebook from "./Assets/img/facebook.png";
import google from "./Assets/img/google.png";
import flag from "./Assets/img/flag.png";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const LoginSignup = (props) => {
  let history = useHistory();
  const [user, setUser] = useState({});
  const [email, setEmail] = useState({});
  const [phone, setPhone] = useState({});
  const [cpassword, setCpassword] = useState({});
  const [invalid, setInvalid] = useState()
  const [password, setPassword] = useState({});
  const users = {userName:user.UserName, Password:password.Password}
  const register=  {userName:user.UserName, Password:password.Password, email:email.email, phone:phone.phone}
  const handleLogin = (e) => {
    // fetching the url
    fetch("http://gamepitara.globaldigitaz.com/api/login",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(users)
    }).then((result)=>{
      result.json().then((res)=>{
        if(res.UserName){
          history.push("/home")
          localStorage.setItem("auth", res.RegId)
          
        } else{
          setInvalid("Invalid userName or Password")
        }
      })
      })
    
      e.preventDefault()
      
    };
  
    //register
    const handleRegister = (e) =>{
      fetch("http://gamepitara.globaldigitaz.com/api/register",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(register)
      
    }).then((result)=>{
      result.json()
      .then(res=>{
        console.log(res);
      })
    })
    e.preventDefault()
      if(user.UserName !=="" && email.email !==""){
        // history.push('/home')
        // localStorage.setItem('auth', "1234")
        
      } else{
        console.log('please enter password');
      }
    }

    useEffect(()=>{
      if(invalid !== undefined){
        setTimeout(() => {
            setInvalid()
        }, 3000);
      };

      // if(password.Password !== cpassword.cpassword){
      //   setTimeout(() => {
      //     setInvalid("password and confrim password does not match")
      //   }, 2000);
      // } else{
        
      // }
    })
  // use effect for api calling

  //facebook login
  const responseFacebook = (response) => {
    if(response.accessToken){
      history.push("/home")
      localStorage.setItem("auth", response.id)
      localStorage.setItem("name", response.name)
    }
  }
  const componentClicked = (data) =>{ 
    console.log(data);
  }

  //google login
  const responseGoogle = (response) => {
    // console.log(response);
    if(response.accessToken){
      history.push("/home")
      localStorage.setItem("auth", response.googleId)
      localStorage.setItem("name", response.profileObj.name)
    }
  }
  return (
    <div className="mainBody">
      {props.sign ? (
        <>
          <div className="loginBody">
            <form action="">
              <div className="form-group">
                <label htmlFor="UserName">Username *</label>
                <input
                  type="text"
                  name="UserName"
                  onChange={(e) => {
                    setUser({ [e.target.name]: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password *</label>
                <input
                  type="password"
                  name="Password"
                  onChange={(e) => {
                    setPassword({ [e.target.name]: e.target.value });
                  }}
                />
                <p>{invalid}</p>
              </div>
              <div className="form-group">
                <button type="submit" onClick={handleLogin}>
                  log in
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
              {/* <div class="fb-login-button" data-width="100px" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false">
              <img src={facebook} alt="" />
              </div> */}
              <FacebookLogin
    appId="451496726209512"
    autoLoad={false}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />
              {/* <img src={google} alt="" /> */}
              <GoogleLogin
    clientId="687002067674-7il5m6nj87n6im42uburlvb9nhtciksa.apps.googleusercontent.com"
    buttonText="Login With Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
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
                <input type="text" name="UserName" onChange={(e)=> {setUser({ [e.target.name]: e.target.value })}} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" name="email" onChange={(e)=> {setEmail({ [e.target.name]: e.target.value })}} required />
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
                  <input type="text" name="phone" onChange={(e)=> {setPhone({ [e.target.name]: e.target.value })}} required/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password *</label>
                <input type="password" name="Password" onChange={(e)=> {setPassword({ [e.target.name]: e.target.value })}} required/>
              </div>
              <div className="form-group">
                <label htmlFor="cpassword">Confirm Password *</label>
                <input type="password" name="cpassword" onChange={(e)=> {setCpassword({ [e.target.name]: e.target.value })}} required />
                <p>{invalid}</p>
              </div>
              <div className="form-group">
                <button type="submit"   onClick={handleRegister}>
                  sign up
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
