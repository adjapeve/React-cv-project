// App.js

import React, { Component } from "react";
// import uniqid from "uniqid";
// import Overview from "./components/Overview";

class App extends Component {

  render() {
    return (
      <div>
        <label htmlFor="name">Name </label>
        <input type="text" id="name" name="name"></input>
      </div>
    );
  }
}

export default App;
