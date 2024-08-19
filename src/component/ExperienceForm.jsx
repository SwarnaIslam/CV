import React, { useState } from "react";
import { Editor } from "primereact/editor";
const ExperienceForm = ({
  experience = {
    title: "",
    employer: "",
    start: "",
    end: "",
    info: "",
  },
  onSave,
  toggle,
}) => {
  const [newExperience, setNewExperience] = useState(experience);
  const [active, setActive] = useState(true);
  const renderCustomToolbar = () => {
    return (
      <span className="ql-formats">
        <button className="ql-bold" aria-label="Bold"></button>
        <button className="ql-italic" aria-label="Italic"></button>
        <button className="ql-underline" aria-label="Underline"></button>
        <button
          className="ql-list"
          value="bullet"
          aria-label="Bullet List"
        ></button>
        <button
          className="ql-indent"
          value="-1"
          aria-label="Decrease Indent"
        ></button>
        <button
          className="ql-indent"
          value="+1"
          aria-label="Increase Indent"
        ></button>
      </span>
    );
  };
  const template = renderCustomToolbar();
  return (
    <>
      <hr className="hr hr-blurry" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave(newExperience);
          if (toggle) {
            setNewExperience({ ...experience });
            toggle();
          }
        }}
      >
        <div className="form-group">
          <label htmlFor="title" className="font-label">
            Job title
          </label>
          <input
            type="text"
            id="title"
            className="form-control inputBox"
            value={newExperience.title}
            onChange={(e) => {
              setNewExperience({ ...newExperience, title: e.target.value });
            }}
            placeholder="Enter experience's title"
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="employer" className="font-label">
            Employer
          </label>
          <input
            type="text"
            id="employer"
            className="form-control inputBox"
            value={newExperience.employer}
            onChange={(e) => {
              setNewExperience({ ...newExperience, employer: e.target.value });
            }}
            placeholder="Enter employer"
          ></input>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-sm-6">
              <label htmlFor="start-date" className="font-label">
                Start date:
              </label>
              <input
                type="month"
                id="start-date"
                className="form-control inputBox"
                value={newExperience.start || ""}
                onChange={(e) => {
                  setNewExperience({ ...newExperience, start: e.target.value });
                }}
              ></input>
            </div>
            <div className="col-sm-6">
              <label htmlFor="end-date" className="font-label">
                End date:
              </label>
              <input
                type="month"
                id="end-date"
                className="form-control inputBox"
                value={newExperience.end || ""}
                onChange={(e) => {
                  setNewExperience({ ...newExperience, end: e.target.value });
                }}
              ></input>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="info" className="font-label">
            Description
          </label>

          <div style={{ backgroundColor: "white" }}>
            <Editor
              value={newExperience.info}
              onTextChange={(e) => {
                setNewExperience({
                  ...newExperience,
                  info: e.htmlValue,
                });
              }}
              style={{
                height: "320px",
                color: "black",
              }}
              className="custom-text"
              headerTemplate={template}
              formats={[
                "bold",
                "italic",
                "underline",
                "list",
                "indent", 
              ]}
            />
          </div>

          
        </div>

        <div className="form-group text-center">
          <button
            type="submit"
            className={`btn btn-outline-info rounded-0 ${
              active ? "active" : ""
            }`}
          >
            Save
          </button>{" "}
          <button
            type="button"
            className="btn btn-outline-info rounded-0"
            onClick={(e) => {
              e.preventDefault();
              setNewExperience({ ...experience });
              if (toggle) {
                toggle();
              }
            }}
            onMouseEnter={() => setActive(false)}
            onMouseLeave={() => setActive(true)}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default ExperienceForm;
