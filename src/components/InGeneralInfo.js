// InGeneralInfo.js

import React, { Component } from "react";
import "../style/InGeneralInfo.css";

class InGeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleDataChange(event) {
    this.props.onDataChange(event);
  }
  handleSubmit(event) {
    this.props.onGeneralInfoSubmit(event);
  }
  render() {
    return (
      <div className="Input-section">
        <h2>General Information</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              id="name"
              name="gIname"
              value={this.props.gIname}
              onChange={this.handleDataChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              id="email"
              name="gIemail"
              value={this.props.gIemail}
              onChange={this.handleDataChange}
              required
            />
          </label>
          <label>
            Phone
            <input
              type="phone"
              id="phone"
              name="gIphone"
              value={this.props.gIphone}
              onChange={this.handleDataChange}
              required
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default InGeneralInfo;
