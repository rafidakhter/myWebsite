import React from "react";
import CoastGuards from "./CoastGuard";
import ECCC from "./ECCC";
import NRCAN from "./NRCAN";
import Carousel from "react-elastic-carousel";

const WorkExperience = () => {
  return (
    <div className="workExperience">
      <h1>Work Experience</h1>
      <Carousel classname="carousel">
        <ECCC />
        <CoastGuards />
        <NRCAN />
      </Carousel>
    </div>
  );
};

export default WorkExperience;

/*  */
