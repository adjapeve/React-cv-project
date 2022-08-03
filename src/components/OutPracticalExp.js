// OutPracticalExp.js

import React, { Component } from "react";
import OrganizeData from "./OrganizeData";
import "../style/OutExperience.css";

class OutPracticalExp extends Component {
  render() {
    const experienceElements = [];
    this.props.pEdata.forEach((experience) => {
      experienceElements.push(
        <OrganizeData
          dataForm={experience}
          key={experience.id}
          component="practical"
          onEditForm={this.props.onEditForm}
          onDeleteExperience={this.props.onDeleteExperience}
        />
      );
    });

    return (
      <div className="Experience-Container">
        <h2>Experience</h2>
        {experienceElements}
      </div>
    );
  }
}

export default OutPracticalExp;
