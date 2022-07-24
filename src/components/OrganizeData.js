import React, { Component } from "react";
class OrganizeData extends Component {
  handleEditExperience(id, event) {
    this.props.onEditExperience(id, event);
    // event.preventDefault();
    // const a = id;
    // console.log(a);
  }

  render() {
    const experience = this.props.experience;
    const result =
      this.props.component === "education" ? (
        <form
          onSubmit={(event) => this.handleEditExperience(experience.id, event)}
        >
          <h4>School Name</h4>
          <p>{experience.schoolName}</p>
          <h4>Title</h4>
          <p>{experience.title}</p>
          <h4>Date Finished</h4>
          <p>{experience.dateFinish}</p>
          <button>Edit</button>
        </form>
      ) : (
        <form onSubmit={this.handleEditExperience}>
          <h4>Company Name</h4>
          <p>{experience.company}</p>
          <h4>Position</h4>
          <p>{experience.position}</p>
          <h4>Main Tasks</h4>
          <p>{experience.tasks}</p>
          <h4>Date Started</h4>
          <p>{experience.dateStart}</p>
          <h4>Date Finished</h4>
          <p>{experience.dateFinish}</p>
          <button>Edit</button>
        </form>
      );
    return result;
  }
}
export default OrganizeData;
