import React, { useState } from "react";

const SkillForm = ({ skill = { skill: "", info: "" }, onSave, toggle }) => {
  const [newSkill, setNewSkill] = useState(skill);
  const [active, setActive] = useState(true);

  return (
    <>
      <hr className="hr hr-blurry" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave(newSkill);
          if (toggle) {
            setNewSkill({ ...skill });
            toggle();
          }
        }}
      >
        <div className="form-group">
          <input
            type="text"
            id="skill"
            className="form-control inputBox"
            value={newSkill.skill}
            onChange={(e) => {
              setNewSkill({ ...newSkill, skill: e.target.value });
            }}
            placeholder="Skill"
            required
          ></input>
        </div>
        <div className="form-group">
          <textarea
            id="info"
            className="form-control inputBox"
            value={newSkill.info}
            onChange={(e) => {
              setNewSkill({ ...newSkill, info: e.target.value });
            }}
            placeholder="Information about the skill"
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
              setNewSkill({ ...skill });
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

export default SkillForm;
