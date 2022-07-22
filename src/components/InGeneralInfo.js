// InGeneralInfo.js

import React, { Component } from "react";

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
      <div>
        <h2>General Information</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              id="name"
              name="gIname"
              value={this.props.name}
              onChange={this.handleDataChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              id="email"
              name="gIemail"
              value={this.props.email}
              onChange={this.handleDataChange}
            />
          </label>
          <label>
            Phone
            <input
              type="phone"
              id="phone"
              name="gIphone"
              value={this.props.phone}
              onChange={this.handleDataChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default InGeneralInfo;
