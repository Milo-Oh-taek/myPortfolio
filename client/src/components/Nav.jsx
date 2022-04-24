import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ aboutmeHandler, projectsHandler, contactHandler }) => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  return (
    <nav className="nav_wrapper">
        <FontAwesomeIcon className="toggleBtn" icon={faBars} onClick={() => setIsToggleOn(!isToggleOn)} />
      <div className={"nav_content_wrapper "+ `${isToggleOn? 'active' : ''}`}>
        <span className="nav_menu" onClick={() => window.scrollTo(0, 0)}>Milo</span>
        <span className="empty_space"></span>
        <span className="nav_menu" onClick={aboutmeHandler}>About me</span>
        <span className="nav_menu" onClick={projectsHandler}>Projects</span>
        <span className="nav_menu" onClick={contactHandler}>Contact</span>
      </div>
    </nav>
  );
};

export default Nav;
