import React, { useState } from "react";

const EducationForm = ({
  education = { name: "", degree: "", start: "", end: "" },
  onSave,
  toggle,
}) => {
  const [newEd, setNewEd] = useState(education);
  const [active, setActive] = useState(true);
  return (
    <>
      <hr className="hr hr-blurry" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave(newEd);
          if (toggle) {
            setNewEd({ ...education });
            toggle();
          }
        }}
      >
        <div className="form-group">
          <label htmlFor="institute" className="font-label">
            Institute:
          </label>
          <input
            type="text"
            id="institute"
            className="form-control inputBox"
            value={newEd.name}
            onChange={(e) => {
              setNewEd({ ...newEd, name: e.target.value });
            }}
            placeholder="Your Institute's name"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="degree" className="font-label">
            Degree:
          </label>
          <input
            type="text"
            id="degree"
            className="form-control inputBox"
            value={newEd.degree}
            onChange={(e) => {
              setNewEd({ ...newEd, degree: e.target.value });
            }}
            placeholder="Degree or field of study"
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
                value={newEd.start || ""}
                onChange={(e) => {
                  setNewEd({ ...newEd, start: e.target.value });
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
                value={newEd.end || ""}
                onChange={(e) => {
                  setNewEd({ ...newEd, end: e.target.value });
                }}
              ></input>
            </div>
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
              setNewEd({ ...education });
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

export default EducationForm;
