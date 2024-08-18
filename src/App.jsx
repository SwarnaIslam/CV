import { useState } from "react";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Expand from "react-expand-animated";
import "./App.css";
import GeneralInfo from "./component/generalInfo";
import Education from "./component/Education";
import EducationForm from "./component/EducationForm";
import Resume from "./component/Resume";
import Link from "./component/Link";
import Skill from "./component/Skill";

function App() {
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [links, setLinks] = useState([
    { id: 0, link: "https://github.com/SwarnaIslam", text: "github" },
  ]);
  const [educations, setEducations] = useState([
    { id: 0, name: "IIT", degree: "BSc", start: "2020-01", end: "2025-01" },
  ]);
  const [skills, setSkills] = useState([
    { id: 0, skill: "Programming language", info: "C++, C#, Java" },
  ]);
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
  };
  function onGeneralSave(newPerson) {
    setGeneral({
      ...general,
      name: newPerson.name,
      email: newPerson.email,
      phone: newPerson.phone,
    });
  }
  function onLinkSave(newLinks) {
    setLinks([...newLinks]);
  }
  function onEducationAdd(education) {
    setEducations([...educations, { ...education, id: Date.now() }]);
  }
  function onEducationSave(newEd) {
    let newEducations = educations.map((education) => {
      if (education.id === newEd.id) {
        return newEd;
      }
      return education;
    });
    setEducations(newEducations);
  }
  function onSkillEdit(editedSkill) {
    let newSkills = skills.map((skill) => {
      if (skill.id === editedSkill.id) {
        return editedSkill;
      }
      return skill;
    });
    setSkills(newSkills);
  }
  function onSkillAdd(addedSkill) {
    setSkills([...skills, { ...addedSkill, id: Date.now() }]);
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div className="row">
              <GeneralInfo
                person={general}
                onSave={onGeneralSave}
              ></GeneralInfo>
            </div>
            <div className="row">
              <Link links={links} onLinkSave={onLinkSave}></Link>
            </div>
            <div className="row">
              <div className="form">
                <h6 className="extra-bold" style={{ display: "inline" }}>
                  Education
                </h6>
                {!state && (
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
                {educations.map((education) => {
                  return (
                    <Education
                      key={education.id}
                      education={education}
                      onEducationSave={onEducationSave}
                    ></Education>
                  );
                })}

                <div>
                  <Expand open={state}>
                    <EducationForm onSave={onEducationAdd} toggle={toggle} />
                  </Expand>
                </div>
              </div>
            </div>
            <div className="row">
              <Skill
                skills={skills}
                onSkillAdd={onSkillAdd}
                onSkillEdit={onSkillEdit}
              />
            </div>
          </div>
          <div className="col-sm-7">
            <Resume
              generalInfo={general}
              links={links}
              educations={educations}
              skills={skills}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
