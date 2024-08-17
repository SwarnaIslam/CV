import { useState } from "react";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Expand from "react-expand-animated";
import "./App.css";
import GeneralInfo from "./component/generalInfo";
import Education from "./component/Education";
import EducationForm from "./component/EducationForm";
import Resume from "./component/Resume";
import Link from "./component/Link";

library.add(fab);

let nextId = 1;
function App() {
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [links, setLinks] = useState([
    { id: 0, link: "https://github.com/SwarnaIslam", text: "github" },
  ]);
  const [educations, setEducations] = useState([]);
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
    setEducations([...educations, { ...education, id: nextId++ }]);
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
                  {!state && (
                    <button
                      onClick={toggle}
                      type="button"
                      className="btn btn-outline-info rounded-0"
                    >
                      Add Institute
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-7">
            <Resume
              generalInfo={general}
              links={links}
              educations={educations}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
