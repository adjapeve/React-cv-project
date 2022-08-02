// OutGeneralInfo.js

import React, { Component } from "react";
import OrganizeData from "./OrganizeData";
import "../style/OutGeneralInfo.css";

class OutGeneralInfo extends Component {
  render() {
    return (
      <div className="GeneralInfo-Container">
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
