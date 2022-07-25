// CvOutput.js

import React, { Component } from "react";
import OutGeneralInfo from "./OutGeneralInfo";
import OutEducationExp from "./OutEducationExp";
import OutPracticalExp from "./OutPracticalExp";
class CvOutput extends Component {
  render() {
    return (
      <div>
        <h1>CV Output</h1>
        <OutGeneralInfo gIdata={this.props.gIdata} />
        <OutEducationExp
          eEdata={this.props.eEdata}
          onEditExperience={this.props.onEditExperience}
          onDeleteExperience={this.props.onDeleteExperience}
        />
        <OutPracticalExp
          pEdata={this.props.pEdata}
          onEditExperience={this.props.onEditExperience}
        />
      </div>
    );
  }
}

export default CvOutput;
