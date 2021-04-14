import "./App.css";
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Assets/css/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import HomeAfter from "./Components/HomeAfter";
import ProfileWallet from "./Components/ProfileWallet";
import Hoc from './Components/Hoc';
import Cards from "./Components/Cards";
import Roulette from "./Components/Roulette";
import Pocker from "./Components/poker"

function App() {
  let auth;
  if (typeof window !== 'undefined') {
    auth = JSON.parse(localStorage.getItem("auth"))
  }
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <HomeAfter />
            {/* <Hoc comp={HomeAfter}/> */}
          </Route>
          <Route path="/cards">
            <Cards />
          </Route>
          <Route path="/roulette">
            <Roulette />
          </Route>
          <Route path="/pocker">
            <Pocker />
          </Route>
          <Route path="/wallet">
            {/* <ProfileWallet /> */}
            <Hoc comp={ProfileWallet} />
          </Route>
          <Route path="/">
            {
              !auth ? <Home /> : <HomeAfter />
            }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
