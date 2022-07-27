import React, { Component } from "react";
class OrganizeData extends Component {
  handleEditForm(id, event) {
    this.props.onEditForm(id, event);
  }
  handleDeleteExperience(id, event) {
    this.props.onDeleteExperience(id, event);
  }

  render() {
    const dataForm = this.props.dataForm;
    let result = "";
    switch (this.props.component) {
      case "education":
        result = (
          <form>
            <h4>School Name</h4>
            <p>{dataForm.schoolName}</p>
            <h4>Title</h4>
            <p>{dataForm.title}</p>
            <h4>Date Finished</h4>
            <p>{dataForm.dateFinish}</p>
            <button
              onClick={(event) =>
                this.handleEditForm(
                  [dataForm.id, this.props.component],
                  event
                )
              }
            >
              Edit
            </button>
            <button
              onClick={(event) =>
                this.handleDeleteExperience(
                  [dataForm.id, this.props.component],
                  event
                )
              }
            >
              Delete
            </button>
          </form>
        );
        break;
      case "practical":
        result = (
          <form>
            <h4>Company Name</h4>
            <p>{dataForm.company}</p>
            <h4>Position</h4>
            <p>{dataForm.position}</p>
            <h4>Main Tasks</h4>
            <p>{dataForm.tasks}</p>
            <h4>Date Started</h4>
            <p>{dataForm.dateStart}</p>
            <h4>Date Finished</h4>
            <p>{dataForm.dateFinish}</p>
            <button
              onClick={(event) =>
                this.handleEditForm(
                  [dataForm.id, this.props.component],
                  event
                )
              }
            >
              Edit
            </button>
            <button
              onClick={(event) =>
                this.handleDeleteExperience(
                  [dataForm.id, this.props.component],
                  event
                )
              }
            >
              Delete
            </button>
          </form>
        );
        break;
      case "general":
        if (dataForm.name) {
          result = (
            <form>
              <h4>Name</h4>
              <p>{dataForm.name}</p>

              <h4>Email</h4>
              <p>{dataForm.email}</p>

              <h4>Phone</h4>
              <p>{dataForm.phone}</p>
              <button
                onClick={(event) =>
                  this.handleEditForm(
                    ["none", this.props.component],
                    event
                  )
                }
              >
                Edit
              </button>
            </form>
          );
        }
        break;
      default:
        console.log("default");
    }
    return result;
  }
}
export default OrganizeData;
