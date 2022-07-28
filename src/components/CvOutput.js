// CvOutput.js

import React, { Component } from "react";
import OutGeneralInfo from "./OutGeneralInfo";
import OutEducationExp from "./OutEducationExp";
import OutPracticalExp from "./OutPracticalExp";
import '../style/CvOutput.css'
class CvOutput extends Component {
  render() {
    return (
      <div className="CvOutput">
        {/* <h1>CV Output</h1> */}
        <OutGeneralInfo
          gIdata={this.props.gIdata}
          onEditForm={this.props.onEditForm}
        />
        <OutEducationExp
          eEdata={this.props.eEdata}
          onEditForm={this.props.onEditForm}
          onDeleteExperience={this.props.onDeleteExperience}
        />
        <OutPracticalExp
          pEdata={this.props.pEdata}
          onEditForm={this.props.onEditForm}
          onDeleteExperience={this.props.onDeleteExperience}
        />
      </div>
    );
  }
}

export default CvOutput;
