import React from "react";
import "../CSS/resume.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faMobile,
  faEnvelope,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Resume = ({ generalInfo, links, educations }) => {
  return (
    <div className="resume">
      <div className="container">
        <div className="row text-center text-white bg-dark">
          <h1>{generalInfo.name || "Your Name"}</h1>
          <div className="d-flex justify-content-center thumbnail-font">
            {generalInfo.phone && (
              <p className="me-4">
                <FontAwesomeIcon icon={faMobile} /> {generalInfo.phone}
              </p>
            )}
            {generalInfo.email && (
              <p className="me-4">
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
              return (
                <p className="me-4" key={link["link"]}>
                  <FontAwesomeIcon icon={["fab", link["text"]]} />{" "}
                  <a href={link["link"]} style={{ textDecoration: "none" }}>
                    {link["text"] || link["link"]}
                  </a>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
