import React, { useState } from "react";
import experiences from "../components/markdowndocs/Experiences.md";
import ReactMarkdown from "react-markdown";

function ContentButton({ linkOpen }) {
  const [experienceContent, setexperienceContent] = useState("");

  fetch(experiences)
    .then((response) => response.text())
    .then((text) => setexperienceContent(text))
    .catch((error) => console.error("Error fetching markdown:", error));

  return (
    <div class="my-5">
      <div class="d-grid gap-2 d-md-block">
        <button
          type="button"
          class="mx-3 btn btn-dark btn-lg col-2"
          onClick={linkOpen}
        >
          JS Projects
        </button>
        <button
          type="button"
          data-toggle="modal"
          data-target="#resume"
          class="mx-3 btn btn-dark btn-lg col-2"
        >
          Experiences
        </button>
      </div>
      <div
        class="modal fade"
        id="resume"
        tabindex="-1"
        role="dialog"
        aria-labelledby="Experiences"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="h1 modal-title">Experiences</h3>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="h6 modal-body text-left">
              <ReactMarkdown>{experienceContent}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentButton;
