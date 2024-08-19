import React, { useState } from "react";

const ProjectForm = ({
  project = { title: "", subTitle: "", link: "", description: "" },
  onSave,
  toggle,
}) => {
  const [newProject, setNewProject] = useState(project);
  const [active, setActive] = useState(true);
  return (
    <>
      <hr className="hr hr-blurry" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave(newProject);
          if (toggle) {
            setNewProject({ ...project });
            toggle();
          }
        }}
      >
        <div className="form-group">
          <label htmlFor="title" className="font-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="form-control inputBox"
            value={newProject.title}
            onChange={(e) => {
              setNewProject({ ...newProject, title: e.target.value });
            }}
            placeholder="Enter project's title"
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="subTitle" className="font-label">
            Sub title
          </label>
          <input
            type="text"
            id="subTitle"
            className="form-control inputBox"
            value={newProject.subTitle}
            onChange={(e) => {
              setNewProject({ ...newProject, subTitle: e.target.value });
            }}
            placeholder="Enter sub title"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="link" className="font-label">
            Project's link
          </label>
          <input
            type="text"
            id="link"
            className="form-control inputBox"
            value={newProject.link}
            onChange={(e) => {
              setNewProject({ ...newProject, link: e.target.value });
            }}
            placeholder="Enter project's link"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="description" className="font-label">
            Project's description
          </label>
          <textarea
            id="description"
            className="form-control inputBox"
            value={newProject.description}
            onChange={(e) => {
              setNewProject({ ...newProject, description: e.target.value });
            }}
            placeholder="Project's Description"
          />
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
              setNewProject({ ...project });
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

export default ProjectForm;
