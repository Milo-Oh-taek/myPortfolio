import React from "react";
import useScroll from "../hooks/useScroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faBlogger } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const contactRef = useScroll();
  return (
    <section>
      <div className="section_content_wrapper">
        <div className="section_content" {...contactRef}>
          <h1>Contact</h1>
          <div>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> oht366@gmail.com
              <br />
              <FontAwesomeIcon icon={faGithub} />{" "}
              <a href="https://github.com/Milo-Oh-taek" target="blank">
                Github
              </a>
              <br />
              <FontAwesomeIcon icon={faBlogger} />
              (new){" "}
              <a href="https://milo-oh-taek.github.io/" target="blank">
                Blog
              </a>
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
