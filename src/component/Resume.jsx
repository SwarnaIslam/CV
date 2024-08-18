import React from "react";
import "../CSS/resume.css";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMobile,
  faEnvelope,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, faLink);
const Resume = ({ generalInfo, links, educations, skills, references }) => {
  return (
    <div className="resume">
      <div
        className="container"
        style={{ padding: "40px", wordWrap: "break-word" }}
      >
        <div
          className="row text-center"
          style={{ height: "auto", wordWrap: "break-word" }}
        >
          <h2 className="m-0">
            <b>{generalInfo.name || "Your Name"}</b>
          </h2>
          <div className="d-flex justify-content-center general-info flex-col flex-wrap  m-0">
            {generalInfo.phone && (
              <p className="me-2 ">
                <FontAwesomeIcon icon={faMobile} /> {generalInfo.phone}
              </p>
            )}
            {generalInfo.email && (
              <p className="me-2">
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                <a
                  href={"mailto:" + generalInfo.email}
                  style={{ textDecoration: "none" }}
                >
                  {generalInfo.email}
                </a>
              </p>
            )}
            {links.map((link) => {
              let newLink = link["link"];
              if (
                !newLink.startsWith("http://") &&
                !newLink.startsWith("https://")
              ) {
                newLink = "http://" + newLink;
              }
              const domain = new URL(newLink).hostname;
              const subdomain = domain.split(".")[0];
              const icon =
                subdomain in library.definitions.fab
                  ? ["fab", subdomain]
                  : ["fas", "link"];
              return (
                <p className="me-2" key={link["link"]}>
                  <FontAwesomeIcon icon={icon} />{" "}
                  <a href={newLink} style={{ textDecoration: "none" }}>
                    {link["text"] || link["link"]}
                  </a>
                </p>
              );
            })}
          </div>
        </div>
        {educations.length > 0 && (
          <div className="row">
            <h6 className="m-0">Education</h6>
            <hr style={{ width: "95%", margin: "auto" }} />

            <ul
              style={{
                marginLeft: "10px",
                listStyle: "none",
              }}
            >
              {educations.map((education) => {
                return (
                  <li key={education.id}>
                    <p className="list-header">{education.name}</p>
                    <p className="list-explain">
                      {education.degree}
                      {(education.start != "" || education.end != "") && " | "}
                      {education.start != "" &&
                        education.end != "" &&
                        `${education.start} - ${education.end}`}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {skills.length > 0 && (
          <div className="row">
            <h6 className="m-0">Skills</h6>
            <hr style={{ width: "95%", margin: "auto" }} />
            <ul style={{ marginLeft: "10px", listStyle: "none" }}>
              {skills.map((skill) => {
                return (
                  <li key={skill.id}>
                    <p className="list-header">{skill.skill}</p>
                    <p className="list-explain">{skill.info}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {references.length > 0 && (
          <div className="row">
            <h6 className="m-0">Reference</h6>
            <hr style={{ width: "95%", margin: "auto" }} />
            <ul style={{ marginLeft: "10px", listStyle: "none" }}>
              {references.map((reference) => {
                return (
                  <li key={reference.id}>
                    <span className="list-header" style={{ margin: "0" }}>
                      {reference.name}
                    </span>
                    {", "}
                    <span className="list-explain">{reference.title}</span>
                    <p className="list-explain">{reference.phone}</p>
                    <p className="list-explain">{reference.email}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
