import React from "react";

const NRCAN = () => {
  return (
    <div className="work">
      <img
        className="workImage"
        src="https://financingforum.com/wp-content/uploads/2018/02/NRCan-logo.png"
        alt="ECCC Logo"
      />
      <div className="workDescription">
        <h2>Naturan Resources Canada</h2>
        <h3>Air EMissions Instrumentation Specialist</h3>
        <ul>
          <li>Design a high accuracy methane flux measurement system</li>
          <li>
            Integrates wind vector and gas concentration measurement system in
            an Unmanned Arial Vehicle for measuring methane flux
          </li>
          <li>
            Applied Monte Carlo analysis to horizontal wind speed sensor
            readings to the simulated total expected uncertainty in designed UAV
            system
          </li>
          <li>
            Wrote SOP for operating and calibrating PASS-3 and OCEC analyzer
          </li>
          <li>
            Designed a fixed fire fighting system using BV ship building codes
            and Evaluated the effectiveness and performance of BC control
            strategies to reduce BC emissions from on road vehicles
          </li>
          <li>
            Calibrated and troubleshoot RS-232/485 digital communication mass
            flow controllers (MFC)
          </li>
          <li>Wrote LabVIEW code to get instrument readings</li>
        </ul>
      </div>
    </div>
  );
};

export default NRCAN;
