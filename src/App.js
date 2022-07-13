// App.js

import React, { Component } from "react";
// import uniqid from "uniqid";
import GeneralInfo from "./components/GeneralInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      generalInfoData: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleInputSubmit(event) {
    event.preventDefault();
    this.setState({
      generalInfoData: this.state.generalInfoData.concat(
        this.state.name,
        this.state.email,
        this.state.phone
      ),
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleInputSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            ></input>
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            ></input>
          </label>
          <label>
            Phone Number
            <input
              type="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
            ></input>
          </label>
          <button type="submit">Add Task</button>
        </form>
        <GeneralInfo
          name={this.state.generalInfoData}
          // email={this.state.email}
          // phone={this.state.phone}
        />
      </div>
    );
  }
}

export default App;
