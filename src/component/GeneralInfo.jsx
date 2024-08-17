import React, { useState } from "react";
import "../CSS/form.css";
import { useCollapse } from "react-collapsed";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const GeneralInfo = ({ person, onSave }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [newPerson, setNewPerson] = useState({
    name: person.name,
    email: person.email,
    phone: person.phone,
    links: person.links,
  });
  const [active, setActive] = useState(true);
  const oldVal = person;

  return (
    <div className="form">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-caret-down-square"
        viewBox="0 0 16 16"
        {...getToggleProps()}
        style={{
          position: "absolute",
          top: "15px",
          right: "15px",
          cursor: "pointer",
        }}
      >
        <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0z" />
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
      </svg>

      {!isExpanded && (
        <>
          <p className="extra-bold">{newPerson.name || "Your name"}</p>
          <span style={{ display: "block" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope"
              viewBox="0 0 16 16"
              style={{ marginRight: "10px" }}
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
            <p className="thumbnail-font" style={{ display: "inline" }}>
              {newPerson.email || "Email"}
            </p>
          </span>
          <span style={{ display: "block" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-telephone"
              viewBox="0 0 16 16"
              style={{ marginRight: "10px" }}
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
            <p className="thumbnail-font" style={{ display: "inline" }}>
              {newPerson.phone || "Phone"}
            </p>
          </span>
        </>
      )}
      <form
        {...getCollapseProps()}
        onSubmit={(e) => {
          e.preventDefault();
          onSave(newPerson);
        }}
      >
        <div className="form-group">
          <label htmlFor="full-name" className="font-label">
            Full name:
          </label>
          <input
            type="text"
            id="full-name"
            value={newPerson.name}
            className="form-control inputBox"
            placeholder="John Doe"
            onChange={(e) => {
              setNewPerson({ ...newPerson, name: e.target.value });
            }}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="font-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={newPerson.email}
            className="form-control inputBox"
            placeholder="abc@gmail.com"
            onChange={(e) => {
              setNewPerson({ ...newPerson, email: e.target.value });
            }}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="font-label">
            Phone:
          </label>
          <input
            type="text"
            id="phone"
            value={newPerson.phone}
            className="form-control inputBox"
            placeholder="Enter phone"
            onChange={(e) => {
              setNewPerson({ ...newPerson, phone: e.target.value });
            }}
          ></input>
        </div>
       
        <div className="form-group text-center">
          <button
            type="submit"
            className={`btn btn-outline-info rounded-0 ${
              active ? "active" : ""
            }`}
          >
            Save
          </button>
          {"  "}
          <button
            type="button"
            className="btn btn-outline-info rounded-0"
            onClick={(e) => {
              e.preventDefault();
              setNewPerson(person);
            }}
            onMouseEnter={() => setActive(false)}
            onMouseLeave={() => setActive(true)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default GeneralInfo;
