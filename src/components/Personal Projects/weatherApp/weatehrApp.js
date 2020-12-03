import React from "react";
import WeatherEninge from "./WeatherEngine";

function WeatherApp() {
  return (
    <div className="WeatherApp">
      <h1 class="projectTitle"> Weather Card</h1>
      <div className="weatherCards">
        <WeatherEninge />
        <WeatherEninge />
        <WeatherEninge />
        <WeatherEninge />
      </div>
    </div>
  );
}

export default WeatherApp;
