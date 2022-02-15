import React from "react";
import useScroll from "../hooks/useScroll";

const Aboutme = () => {
  const aboutRef = useScroll();
  return (
    <>
      <div className="section_content_wrapper">
        <div className="section_content" {...aboutRef}>
          <h1>Nice to meet you.</h1>
          <div>
            <p>
              I'm a Front End Developer from South Korea who is interested in
              learning new skills
              <br />
              which are not only Front End but Back End.
            </p>
            <p>
              I'm looking for a team that I can learn from a lot
              <br /> and also I can contribute to
            </p>
            <p>
              My goal is I could do coding for a long time as a web developer
              <br />
              who keep learning new things, sharing knowledge
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
