import React from "react";
import Carousel from "react-elastic-carousel";
import VRAirPaint from "./vrAirPaint";
import WeatherApp from "./weatherApp/weatehrApp";

const PrsonalProjects = () => {
  return (
    <div className="workExperience">
      <h1>personal Projects</h1>
      <Carousel>
        <VRAirPaint />
        <WeatherApp />
      </Carousel>
    </div>
  );
};

export default PrsonalProjects;
