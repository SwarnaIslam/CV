import React, { useState } from "react";

const ReferenceForm = ({
  reference = { name: "", title: "", organization: "", phone: "", email: "" },
  onSave,
  toggle,
}) => {
  const [newRef, setNewRef] = useState(reference);
  const [active, setActive] = useState(true);
  return (
    <>
      <hr className="hr hr-blurry" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave(newRef);
          if (toggle) {
            setNewRef({ ...reference });
            toggle();
          }
        }}
      >
        <div className="form-group">
          <label htmlFor="name" className="font-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control inputBox"
            value={newRef.name}
            onChange={(e) => {
              setNewRef({ ...newRef, name: e.target.value });
            }}
            placeholder="Enter full name"
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="title" className="font-label">
            Job title
          </label>
          <input
            type="text"
            id="title"
            className="form-control inputBox"
            value={newRef.title}
            onChange={(e) => {
              setNewRef({ ...newRef, title: e.target.value });
            }}
            placeholder="Enter job title"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="organization" className="font-label">
            Organization
          </label>
          <input
            type="text"
            id="organization"
            className="form-control inputBox"
            value={newRef.organization}
            onChange={(e) => {
              setNewRef({ ...newRef, organization: e.target.value });
            }}
            placeholder="Enter organization name"
          ></input>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-sm-6">
              <label htmlFor="phone" className="font-label">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="form-control inputBox"
                value={newRef.phone}
                onChange={(e) => {
                  setNewRef({ ...newRef, phone: e.target.value });
                }}
                placeholder="Enter phone number"
              ></input>
            </div>
            <div className="col-sm-6">
              <label htmlFor="email" className="font-label">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="form-control inputBox"
                value={newRef.email}
                onChange={(e) => {
                  setNewRef({ ...newRef, email: e.target.value });
                }}
                placeholder="Enter email address"
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
              setNewRef({ ...reference });
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

export default ReferenceForm;
