// App.js

import React, { Component } from "react";
// import uniqid from "uniqid";
import CvInput from "./components/CvInput";
import CvOutput from "./components/CvOutput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gIname: "",
      gIemail: "",
      gIphone: "",
      gIrender: { name: "", email: "", phone: "" },
    };
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleGeneralInfoSubmit = this.handleGeneralInfoSubmit.bind(this);
  }
  handleDataChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  handleGeneralInfoSubmit(event) {
    event.preventDefault();
    this.setState({
      gIrender: {
        name: this.state.gIname,
        email: this.state.gIemail,
        phone: this.state.gIphone,
      },
    });
  }

  render() {
    return (
      <div>
        <CvInput
          entryData={this.state}
          onDataChange={this.handleDataChange}
          onGeneralInfoSubmit={this.handleGeneralInfoSubmit}
        />
        <CvOutput renderData={this.state.gIrender} />
        <p></p>
      </div>
    );
  }
}

export default App;
