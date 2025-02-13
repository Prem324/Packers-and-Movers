import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import "./index.css";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </>
    );
  }
}

export default App;
