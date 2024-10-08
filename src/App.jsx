import React from "react";
import { useState, useRef } from "react";
import GeneralInfo from "./component/GeneralInfo";
import Education from "./component/Education";
import Resume from "./component/Resume";
import Link from "./component/Link";
import Skill from "./component/Skill";
import Reference from "./component/Reference";
import Project from "./component/Project";
import Experience from "./component/Experience";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePDF } from "react-to-pdf";
import { useReactToPrint } from "react-to-print";
import "./App.css";
function App() {
  // const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [general, setGeneral] = useState({
    name: "Raisa Islam",
    email: "raisaislam@gmail.com",
    phone: "017xxxxxxxx",
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
  const [references, setReferences] = useState([
    {
      id: 0,
      name: "John Doe",
      title: "Development Manager",
      organization: "Unknown Company",
      phone: "",
      email: "johndoe@unknowncompany.com",
    },
  ]);
  const [projects, setProjects] = useState([
    {
      id: 0,
      title: "Car Selling App",
      subTitle: "React | Express | Node | MongoDB | AWS S3 Bucket",
      link: "https://github.com/SwarnaIslam/Backend_DevOps",
      description:
        "A car-selling website where users list their cars for sale and buyers can contact them.",
    },
  ]);
  const [experiences, setExperiences] = useState([
    {
      id: 0,
      title: "Intern",
      employer: "Unknown company",
      start: "2024-02",
      end: "2024-06",
      info: "",
    },
  ]);
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
  function onReferenceAdd(addedRef) {
    setReferences([...references, { ...addedRef, id: Date.now() }]);
  }
  function onReferenceEdit(editedRef) {
    let newReferences = references.map((ref) => {
      if (ref.id === editedRef.id) {
        return editedRef;
      }
      return ref;
    });
    setReferences(newReferences);
  }
  function onProjectAdd(addedProject) {
    setProjects([...projects, { ...addedProject, id: Date.now() }]);
  }
  function onProjectEdit(editedProject) {
    let newProjects = projects.map((project) => {
      if (project.id === editedProject.id) {
        return editedProject;
      }
      return project;
    });
    setProjects(newProjects);
  }
  function onExperienceAdd(addedExperience) {
    console.log(addedExperience);
    setExperiences([...experiences, { ...addedExperience, id: Date.now() }]);
  }
  function onExperienceEdit(editedExperience) {
    console.log(editedExperience);
    let newExperiences = experiences.map((experience) => {
      if (experience.id === editedExperience.id) {
        return editedExperience;
      }
      return experience;
    });
    setExperiences(newExperiences);
  }
  return (
    <>
      <div
        className="container"
        style={{ position: "absolute", top: "20px", left: "20px" }}
      >
        <div className="row">
          <div className="col-sm-6">
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
              <Project
                projects={projects}
                onProjectAdd={onProjectAdd}
                onProjectEdit={onProjectEdit}
              />
            </div>
            <div className="row">
              <Experience
                experiences={experiences}
                onExperienceAdd={onExperienceAdd}
                onExperienceEdit={onExperienceEdit}
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

          <div className="col-sm-6 ">
            <div style={{ position: "absolute", top: "20px", right: "0px" }}>
              <button
                type="button"
                className="btn btn-outline-info"
                onClick={handlePrint}
              >
                <FontAwesomeIcon icon={faDownload} />
              </button>
            </div>
            <Resume
              generalInfo={general}
              links={links}
              educations={educations}
              skills={skills}
              references={references}
              projects={projects}
              experiences={experiences}
              refer={componentRef}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
