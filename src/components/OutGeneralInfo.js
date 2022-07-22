// OutGeneralInfo.js

import React, { Component } from "react";

class OutGeneralInfo extends Component {
  render() {
    return (
      <div>
        <h2>General Information</h2>
        <label>
          Name
          <p>{this.props.renderData.name}</p>
        </label>
        <label>
          Email
          <p>{this.props.renderData.email}</p>
        </label>
        <label>
          Phone
          <p>{this.props.renderData.phone}</p>
        </label>
      </div>
    );
  }
}

export default OutGeneralInfo;
