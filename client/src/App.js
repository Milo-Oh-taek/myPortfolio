import "./App.scss";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import AboutmeKor from "./components/AboutmeKor";
import ProjectsKor from "./components/ProjectsKor";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";
import Chat from "./components/Chat";

function App() {
  const aboutmeRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const [language, setLanguage] = useState(false);
  const [location, setLocation] = useState("location");

  const aboutmeHandler = () => {
    aboutmeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const projectsHandler = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const contactHandler = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (location.indexOf("Korea") === -1) {
      setLanguage(true);
    } else {
      setLanguage(false);
    }
  }, [location]);

  useEffect(() => {
    axios.get("http://ip-api.com/json").then((res) => {
      setLocation(res.data.country);
    });
  }, []);

  useEffect(() => {
    if (location === "location") return;
    axios.get("http://localhost:3001/entered", {
      params: { country: location },
    });
  }, [location]);

  return (
    <div className="App">
      <div className="lang_area">
        <div className="lang_toggle_area">
          <span>KOR</span>
          {language ? (
            <FontAwesomeIcon
              icon={faToggleOn}
              className="lang_icon"
              onClick={() => setLanguage(!language)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faToggleOff}
              className="lang_icon"
              onClick={() => setLanguage(!language)}
            />
          )}
          <span>ENG</span>
          <br />
        </div>
        <div style={{ textAlign: "center" }}>{location}</div>
      </div>
      <header className="App_header">
        Front End Developer
        <br />
        Milo
      </header>
      <Nav
        aboutmeHandler={aboutmeHandler}
        projectsHandler={projectsHandler}
        contactHandler={contactHandler}
      />
      <main>
        <section ref={aboutmeRef}>
          {language ? <Aboutme /> : <AboutmeKor />}
        </section>
        <section ref={projectsRef}>
          {language ? <Projects /> : <ProjectsKor />}
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
      <Chat />
      <footer>
        <h2>© 2022. Hyeontaek Oh</h2>
      </footer>
    </div>
  );
}

export default App;
