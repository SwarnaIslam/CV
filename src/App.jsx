import { useState } from "react";

import "./App.css";
import GeneralInfo from "./component/generalInfo";
import Education from "./component/Education";
import Resume from "./component/Resume";
import Link from "./component/Link";
import Skill from "./component/Skill";
import Reference from "./component/Reference";

function App() {
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [links, setLinks] = useState([]);
  const [educations, setEducations] = useState([]);
  const [skills, setSkills] = useState([]);
  const [references, setReferences] = useState([]);

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
  function onEducationEdit(newEd) {
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
  function onReferenceAdd(ref) {
    setReferences([...references, { ...ref, id: Date.now() }]);
  }
  function onReferenceEdit(newRef) {
    let newReferences = references.map((ref) => {
      if (ref.id === newRef.id) {
        return newRef;
      }
      return ref;
    });
    setReferences(newReferences);
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
              <Education
                educations={educations}
                onEducationAdd={onEducationAdd}
                onEducationEdit={onEducationEdit}
              />
            </div>
            <div className="row">
              <Skill
                skills={skills}
                onSkillAdd={onSkillAdd}
                onSkillEdit={onSkillEdit}
              />
            </div>
            <div className="row">
              <Reference
                references={references}
                onReferenceAdd={onReferenceAdd}
                onReferenceEdit={onReferenceEdit}
              />
            </div>
          </div>
          <div className="col-sm-7">
            <Resume
              generalInfo={general}
              links={links}
              educations={educations}
              skills={skills}
              references={references}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
