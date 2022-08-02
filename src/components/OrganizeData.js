import React, { Component } from "react";
import "../style/OrganizeData.css";
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
          <div>
            <h4>School Name</h4>
            <p>{dataForm.schoolName}</p>
            <h4>Title</h4>
            <p>{dataForm.title}</p>
            <h4>Date Finished</h4>
            <p>{dataForm.dateFinish}</p>
            <button
              onClick={(event) =>
                this.handleEditForm([dataForm.id, this.props.component], event)
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
          </div>
        );
        break;
      case "practical":
        result = (
          <div>
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
                this.handleEditForm([dataForm.id, this.props.component], event)
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
          </div>
        );
        break;
      case "general":
        if (dataForm.name) {
          result = (
            <div>
              <p className="GeneralInfo-Name">{dataForm.name}</p>

              <p className="GeneralInfo-Data">
                <span className="GeneralInfo-DataLabel">Email </span>
                {dataForm.email}
              </p>

              <p className="GeneralInfo-Data">
                <span className="GeneralInfo-DataLabel">Phone </span>
                {dataForm.phone}
              </p>
              <button
                className="GeneralInfo-EditButton"
                onClick={(event) =>
                  this.handleEditForm(["none", this.props.component], event)
                }
              >
                Edit
              </button>
            </div>
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
