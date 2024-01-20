import React from "react";
import "../CSS/GeneralInfo.css";
const GeneralInfo = ({ collapse, onExpand }) => {
  return (
    <div className="general-info" onClick={() => onExpand("general-info")}>
      <h6 className="extra-bold">General Information</h6>
      {collapse ? (
        <form>
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
        </form>
      ) : (
        <></>
      )}
    </div>
  );
};

export default GeneralInfo;
