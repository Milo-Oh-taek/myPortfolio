import "./App.scss";
import React, { useRef } from "react";

import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

function App() {
  const aboutmeRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const aboutmeHandler = () => {
    aboutmeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const projectsHandler = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const contactHandler = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
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
          <Aboutme />
        </section>
        <section ref={projectsRef}>
          <Projects />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
      <footer>
        <h2>© 2022. Hyeontaek Oh</h2>
      </footer>
    </div>
  );
}

export default App;
