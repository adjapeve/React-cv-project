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
          <div className="ExperienceInfo">
            <p>{dataForm.dateFinish}</p>
            <div>
              <p className="Experience-bold">{dataForm.title}</p>
              <p className="Experience-italic">{dataForm.schoolName}</p>
              <div className="EditUpdateButtons">
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
              </div>
            </div>
          </div>
        );
        break;
      case "practical":
        result = (
          <div className="ExperienceInfo">
            <div>
              <p>{dataForm.dateStart}</p>
              <p>{dataForm.dateFinish}</p>
            </div>
            <div className="ExperienceInfo-Right">
              <p className="Experience-bold">{dataForm.position}</p>
              <p className="Experience-italic">{dataForm.company}</p>
              <p>{dataForm.tasks}</p>
              <div className="EditUpdateButtons">
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
              </div>
            </div>
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
