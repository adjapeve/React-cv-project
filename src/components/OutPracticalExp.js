// OutPracticalExp.js

import React, { Component } from "react";
import OrganizeData from "./OrganizeData";

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
      <div>
        <h2>Practical Experience</h2>
        {experienceElements}
      </div>
    );
  }
}

export default OutPracticalExp;
