// OutGeneralInfo.js

import React, { Component } from "react";

class OutGeneralInfo extends Component {
  render() {
    return (
      <div>
        <h2>General Information</h2>

        <h4>Name</h4>
        <p>{this.props.gIdata.name}</p>

        <h4>Email</h4>
        <p>{this.props.gIdata.email}</p>

        <h4>Phone</h4>
        <p>{this.props.gIdata.phone}</p>
      </div>
    );
  }
}

export default OutGeneralInfo;
