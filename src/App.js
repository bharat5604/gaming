import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Components/Assets/css/style.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import HomeAfter from "./Components/HomeAfter";
import ProfileWallet from "./Components/ProfileWallet";
import Hoc from './Components/Hoc';
import LoggedHeader from "./Components/LoggedHeader";

function App() {
  let auth = JSON.parse(localStorage.getItem("auth"))
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <HomeAfter />
            {/* <Hoc comp={HomeAfter}/> */}
          </Route>
          
          <Route path="/wallet">
            {/* <ProfileWallet /> */}
            <Hoc comp={ProfileWallet}/>
          </Route>
          <Route path="/">
            {
              !auth ? <Home /> : <HomeAfter />
            }
            {/* <Hoc comp={Home}/> */}
            {/* <Home /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
