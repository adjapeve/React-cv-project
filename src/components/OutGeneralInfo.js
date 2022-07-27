// OutGeneralInfo.js

import React, { Component } from "react";
import OrganizeData from "./OrganizeData";

class OutGeneralInfo extends Component {
  render() {
    return (
      <div>
        <h2>General Information</h2>

        <OrganizeData
          dataForm={this.props.gIdata}
          onEditForm={this.props.onEditForm}
          component="general"
        />
      </div>
    );
  }
}

export default OutGeneralInfo;
