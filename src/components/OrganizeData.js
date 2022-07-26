import React, { Component } from "react";
class OrganizeData extends Component {
  handleEditExperience(id, event) {
    this.props.onEditExperience(id, event);
  }
  handleDeleteExperience(id, event) {
    this.props.onDeleteExperience(id, event);
  }

  render() {
    const experience = this.props.experience;
    const result =
      this.props.component === "education" ? (
        <form>
          <h4>School Name</h4>
          <p>{experience.schoolName}</p>
          <h4>Title</h4>
          <p>{experience.title}</p>
          <h4>Date Finished</h4>
          <p>{experience.dateFinish}</p>
          <button
            onClick={(event) =>
              this.handleEditExperience(
                [experience.id, this.props.component],
                event
              )
            }
          >
            Edit
          </button>
          <button
            onClick={(event) =>
              this.handleDeleteExperience(
                [experience.id, this.props.component],
                event
              )
            }
          >
            Delete
          </button>
        </form>
      ) : (
        <form>
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
          <button
            onClick={(event) =>
              this.handleEditExperience(
                [experience.id, this.props.component],
                event
              )
            }
          >
            Edit
          </button>
          <button
            onClick={(event) =>
              this.handleDeleteExperience(
                [experience.id, this.props.component],
                event
              )
            }
          >
            Delete
          </button>
        </form>
      );
    return result;
  }
}
export default OrganizeData;
