import React, { useState } from "react";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Expand from "react-expand-animated";
import ExperienceForm from "./ExperienceForm";
const Experience = ({ experiences, onExperienceAdd, onExperienceEdit }) => {
  const [addable, setAddable] = useState(false);
  const toggle = () => {
    setAddable(!addable);
  };
  return (
    <>
      <div className="form">
        <h6 className="extra-bold" style={{ display: "inline" }}>
          Experiences
        </h6>
        {!addable && (
          <FontAwesomeIcon
            icon={faSquarePlus}
            style={{
              color: "#51B9CA",
              marginLeft: "6px",
              cursor: "pointer",
            }}
            onClick={toggle}
          />
        )}
        {experiences.map((experience) => {
          return (
            <SingleExperience
              key={experience.id}
              experience={experience}
              onExperienceEdit={onExperienceEdit}
            ></SingleExperience>
          );
        })}

        <Expand open={addable}>
          <ExperienceForm onSave={onExperienceAdd} toggle={toggle} />
        </Expand>
      </div>
    </>
  );
};

const SingleExperience = ({ experience, onExperienceEdit }) => {
  const [state, setState] = useState(false);

  const toggle = () => {
    setState(!state);
  };
  return (
    <>
      <div>
        <hr className="hr hr-blurry" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-down-square"
          viewBox="0 0 16 16"
          onClick={toggle}
          style={{
            position: "absolute",
            // top: "15px",
            right: "15px",
            cursor: "pointer",
          }}
        >
          <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0z" />
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
        </svg>
      </div>

      {!state && (
        <div>
          <p className="thumbnail-font ellipse-text m-0">{experience.title}</p>
          <p className="thumbnail-font ellipse-text -0">
            {experience.employer}
          </p>
        </div>
      )}
      <Expand open={state}>
        <ExperienceForm experience={experience} onSave={onExperienceEdit} />
      </Expand>
    </>
  );
};

export default Experience;
