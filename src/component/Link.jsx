import React, { useState } from "react";
import Expand from "react-expand-animated";
import {
  faPlus,
  faSquarePlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Link = ({ links, onLinkSave }) => {
  const [state, setState] = useState(false);
  const [newLinks, setNewLinks] = useState(links);
  const [active, setActive] = useState(true);
  const toggle = () => {
    setState(!state);
  };
  return (
    <>
      <div className="form">
        <h6 className="extra-bold" style={{ display: "inline" }}>
          Links
        </h6>
        <FontAwesomeIcon
          icon={faSquarePlus}
          style={{ color: "#51B9CA", marginLeft: "6px", cursor: "pointer" }}
          onClick={(e) => {
            if (!state) {
              setState(true);
            }
            setNewLinks([...newLinks, { id: Date.now(), link: "", text: "" }]);
          }}
        />

        {newLinks.length > 0 && (
          <div>
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
                top: "15px",
                right: "15px",
                cursor: "pointer",
              }}
            >
              <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0z" />
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
            </svg>
          </div>
        )}
        <Expand open={state}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onLinkSave(newLinks);
            }}
          >
            {newLinks.map((link) => {
              return (
                <div className="form-group" key={link.id}>
                  <div className="row">
                    <div className="col-7">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Link"
                        value={link["link"]}
                        onChange={(e) => {
                          const changedLinks = newLinks.map((l) => {
                            if (l.id === link.id) {
                              return { ...link, link: e.target.value };
                            }
                            return l;
                          });
                          setNewLinks(changedLinks);
                        }}
                        required
                      />
                    </div>
                    <div className="col-3">
                      <input
                        type="text"
                        className="form-control"
                        value={link["text"]}
                        placeholder="Text(Optional)"
                        onChange={(e) => {
                          const changedLinks = newLinks.map((l) => {
                            if (l.id === link.id) {
                              return { ...link, text: e.target.value };
                            }
                            return l;
                          });
                          setNewLinks(changedLinks);
                        }}
                      />
                    </div>
                    <div className="col-2">
                      <button
                        type="button"
                        className="btn btn-outline-info rounded-0"
                        onClick={() => {
                          const changedLinks = newLinks.filter(
                            (l) => l.id !== link.id
                          );
                          setNewLinks(changedLinks);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            {(links.length > 0 || newLinks.length > 0) && (
              <div className="form-group text-center">
                <button
                  type="submit"
                  className={`btn btn-outline-info rounded-0 ${
                    active ? "active" : ""
                  }`}
                >
                  Save
                </button>
                {"  "}
                <button
                  type="button"
                  className="btn btn-outline-info rounded-0"
                  onClick={(e) => {
                    e.preventDefault();
                    setNewLinks(links);
                  }}
                  onMouseEnter={() => setActive(false)}
                  onMouseLeave={() => setActive(true)}
                >
                  Cancel
                </button>
              </div>
            )}
          </form>
        </Expand>
      </div>
    </>
  );
};

export default Link;
