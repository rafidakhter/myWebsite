import React from "react";

import AboutMe from "./AboutMe";

const Header = () => {
  return (
    <div>
      <div className="Header">
        <h1>RAFID AKHTER</h1>
      </div>
      <div className="about-me">
        <AboutMe />
      </div>
    </div>
  );
};

export default Header;
