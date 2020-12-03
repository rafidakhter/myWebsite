import React from "react";

const CostGuard = () => {
  return (
    <div className="work">
      <img
        className="workImage"
        src="https://ral.ca/wp-content/uploads/2019/12/DSC_3595-940x627.jpg"
        alt="coastGuard"
      />
      <div className="workDescription">
        <h2>Canadian Coast Guard</h2>
        <h3>Junior Mechanical Engineer</h3>
        <ul>
          <li>
            Proposed a black and grey water distribution and treatment system
            which complies to vessel pollution and dangerous chemical
            regulations, Canada shipping Act
          </li>

          <li>Designed HVAC duct system in compliance to ISO-7547 standards</li>

          <li>
            Designed power generation system for a hybrid propulsion system
            based on electric and propulsion operation loads and created AutoCAD
            models of engine exhaust silencer and NOx reduction system
          </li>
          <li>
            Designed a fixed fire fighting system using BV ship building codes
            and Transport Canada’s vessel construction fire protection,
            detection, and extinction regulations
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CostGuard;
