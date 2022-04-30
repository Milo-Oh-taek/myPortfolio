import React from "react";
import useScroll from "../hooks/useScroll";

const Aboutme = () => {
  const aboutRef = useScroll();
  return (
    <>
      <div className="section_content_wrapper">
        <div className="section_content" {...aboutRef}>
          <h1>Nice to meet you.</h1>
          <div className="introduce">
            <p>
              I am a South Korean Front End Developer who is passionate about
              learning new skills.
              <br />
              My interests lie in a Front End Development, as well as in a Back
              End Development.
            </p>
            <p>
              I am looking to be a part of a team to which I can contribute and
              learn from.
            </p>
            <p>
              My ultimate goal is to built a successful career as a web
              developer, to acquire new skills and share my knowledge.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
