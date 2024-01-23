import React from "react";
import "../CSS/form.css";
import { useCollapse } from "react-collapsed";
const Education = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="form">
      <h6 className="extra-bold" style={{display:"inline"}}>Education</h6>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-caret-down-square"
        viewBox="0 0 16 16"
        {...getToggleProps()}
        style={{ position:"absolute", top:"15px", right:"15px" , cursor: "pointer"}}
      >
        <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0z" />
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
      </svg>
      <form {...getCollapseProps()}>
        <div className="form-group">
          <label for="institute" className="font-label">
            Institute:
          </label>
          <input
            type="text"
            id="institute"
            className="form-control inputBox"
            placeholder="Your Institute's name"
          ></input>
        </div>
        <div className="form-group">
          <label for="degree" className="font-label">
            Degree:
          </label>
          <input
            type="text"
            id="degree"
            className="form-control inputBox"
            placeholder="Degree or field of study"
          ></input>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-sm-6">
              <label for="start-date" className="font-label">
                Start date:
              </label>
              <input
                type="month"
                id="start-date"
                className="form-control inputBox"
              ></input>
            </div>
            <div className="col-sm-6">
              <label for="end-date" className="font-label">
                End date:
              </label>
              <input
                type="month"
                id="end-date"
                className="form-control inputBox"
              ></input>
            </div>
          </div>
        </div>
        <hr className="hr hr-blurry" />
        <div className="form-group text-center">
          <button type="button" className="btn btn-outline-info rounded-0">
            Add Institute
          </button>
        </div>
      </form>
    </div>
  );
};

export default Education;
