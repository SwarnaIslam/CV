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
const Resume = ({ generalInfo, links, educations }) => {
  return (
    <div className="resume">
      <div className="container">
        <div className="row text-center text-white bg-dark">
          <h1>{generalInfo.name || "Your Name"}</h1>
          <div className="d-flex justify-content-center thumbnail-font flex-col">
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
              const domain = new URL(link["link"]).hostname;
              const subdomain = domain.split(".")[0];
              const icon =
                subdomain in library.definitions.fab
                  ? ["fab", subdomain]
                  : ["fas", "link"];
              return (
                <p className="me-4" key={link["link"]}>
                  <FontAwesomeIcon icon={icon} />{" "}
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
