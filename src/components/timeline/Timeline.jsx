import React from "react";

import {Timeline} from "./timeline.css";

 export const Timeline = ({ icon, year, heading, description }) => {
  return (
    <div className="task-card">
      <div className="marker">
        <div className="inside">
          <img src={icon} alt="icon" className="icon" />
        </div>
      </div>
      <div className="year-banner">{year}</div>
      <div className="text-section">
        <div className="task-title">{heading}</div>
        <div className="task-description">{description}</div>
      </div>
    </div>
  );
};
export const TimelineInvert = ({ icon, year, heading, description }) => {
  return (
    <div className="task-card">
      <div className="text-section">
        <div className="task-title">{heading}</div>
        <div className="task-description">{description}</div>
      </div>
      <div className="year-banner">{year}</div>
      <div className="marker invert">
        <div className="inside">
          <img src={icon} alt="icon" className="icon" />
        </div>
      </div>
    </div>
  );
};