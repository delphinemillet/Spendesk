import React, { Component } from "react";

import Users from "./screens/users";
import logo from "./logo.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="spendesk" />
        <Users />
      </div>
    );
  }
}

export default App;
