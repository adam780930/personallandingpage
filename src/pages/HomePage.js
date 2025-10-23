import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Portrait from "../components/Portrait";
import ProjectExamples from "../components/ProjectExamples";
import ContentButton from "../components/ContentButton";
import AboutThisSite from "../components/markdowndocs/Aboutthiswebsite.md";

function HomePage() {
  const [aboutThisWebsiteContent, setaboutThisWebsiteContent] = useState("");

  fetch(AboutThisSite)
    .then((response) => response.text())
    .then((text) => setaboutThisWebsiteContent(text))
    .catch((error) => console.error("Error fetching markdown:", error));

  function linkOpen() {
    window.open("https://project.adamtsaidev.com");
  }

  return (
    <div>
      <div class="h2 fw-bold text-center my-5">
        Welcome to my landing page
        <Portrait />
        <ContentButton linkOpen={linkOpen} />
        <p class="h6 col-md-5 bg-light text-left text-dark border border-dark rounded mx-auto p-2 mt-2">
          <ReactMarkdown>{aboutThisWebsiteContent}</ReactMarkdown>
        </p>
        <div class="my-5">
          <ProjectExamples />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
