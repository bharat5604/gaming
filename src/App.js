import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Components/Assets/css/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import HomeAfter from "./Components/HomeAfter";
import ProfileWallet from "./Components/ProfileWallet";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <HomeAfter />
          </Route>
          <Route path="/wallet">
            <ProfileWallet />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
