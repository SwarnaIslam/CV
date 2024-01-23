import React from "react";
import "../CSS/form.css";
import { useCollapse } from "react-collapsed";
const GeneralInfo = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="form">
      <h6 className="extra-bold" style={{display:"inline"}}>General Information</h6>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-caret-down-square"
        viewBox="0 0 16 16"
        {...getToggleProps()}
        style={{ position: "absolute", top:"15px",right: "15px", cursor: "pointer" }}
      >
        <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0z" />
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
      </svg>
      <form {...getCollapseProps()}>
        <div className="form-group">
          <label for="full-name" className="font-label">
            Full name:
          </label>
          <input
            type="text"
            id="full-name"
            className="form-control inputBox"
            placeholder="John Doe"
          ></input>
        </div>
        <div className="form-group">
          <label for="email" className="font-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-control inputBox"
            placeholder="abc@gmail.com"
          ></input>
        </div>
        <div className="form-group">
          <label for="phone" className="font-label">
            Phone:
          </label>
          <input
            type="text"
            id="phone"
            className="form-control inputBox"
            placeholder="Enter phone"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default GeneralInfo;
