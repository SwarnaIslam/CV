import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GeneralInfo from "./component/generalInfo";
import Education from "./component/Education";

function App() {
  const [general, setGeneral] = useState({ name: "", email: "", phone: "" });
  function onSave(newPerson) {
    console.log(newPerson);
    setGeneral({
      ...general,
      name: newPerson.name,
      email: newPerson.email,
      phone: newPerson.phone,
    });
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div className="row">
              <GeneralInfo person={general} onSave={onSave}></GeneralInfo>
            </div>
            <div className="row">
              <Education></Education>
            </div>
          </div>
          <div className="col-sm 7"></div>
        </div>
      </div>
    </>
  );
}

export default App;
