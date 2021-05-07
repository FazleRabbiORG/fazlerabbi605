import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Experience = () => {
  return (
    <div className="experience padd-15">
      <h3 className="title">Experience</h3>
      <div className="row">
        <div className="timeline-box padd-15">
          <div className="timeline shadow-dark">
            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h6 className="timeline-date">
                <FontAwesomeIcon icon={faCalendarAlt} /> Since 2021
              </h6>
              <h4 className="timeline-title">Build React Project</h4>
              <p className="timeline-text">
                I have done over ten project some of are build with React JS
              </p>
            </div>
            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h6 className="timeline-date">
                <FontAwesomeIcon icon={faCalendarAlt} /> Since 2021
              </h6>
              <h4 className="timeline-title">Full Stack web project</h4>
              <p className="timeline-text">
                I have done over ten project some of are build with React JS and
                node JS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
