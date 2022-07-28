// CvInput.js

import React, { Component } from "react";
import InGeneralInfo from "./InGeneralInfo";
import InEducationExp from "./InEducationExp";
import InPracticalExp from "./InPracticalExp";
import '../style/CvInput.css'

class CvInput extends Component {
  render() {
    const {
      gIname,
      gIemail,
      gIphone,
      eEschoolName,
      eEtitle,
      eEdateFinish,
      pEcompany,
      pEposition,
      pEtasks,
      pEdateStart,
      pEdateFinish,
    } = this.props.entryData;
    return (
      <div className="CvInput">
        {/* <h1>CV Input</h1> */}
        <InGeneralInfo
          gIname={gIname}
          gIemail={gIemail}
          gIphone={gIphone}
          onDataChange={this.props.onDataChange}
          onGeneralInfoSubmit={this.props.onGeneralInfoSubmit}
        />
        <br />
        <InEducationExp
          eEschoolName={eEschoolName}
          eEtitle={eEtitle}
          eEdateFinish={eEdateFinish}
          onDataChange={this.props.onDataChange}
          onEducationExpSubmit={this.props.onEducationExpSubmit}
        />
        <br />
        <InPracticalExp
          pEcompany={pEcompany}
          pEposition={pEposition}
          pEtasks={pEtasks}
          pEdateStart={pEdateStart}
          pEdateFinish={pEdateFinish}
          onDataChange={this.props.onDataChange}
          onPracticalExpSubmit={this.props.onPracticalExpSubmit}
        />
      </div>
    );
  }
}

export default CvInput;
