import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Education = () => {
    return (
        <div className="education padd-15">
            <h3 className="title">Education</h3>
            <div className="row">
                <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">

                        <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h6 className="timeline-date"><FontAwesomeIcon icon={faCalendarAlt} /> Since 2019</h6>
                            <h4 className="timeline-title">Bachelor of science</h4>
                            <h5 className="timeline-title">
                            Islamic University, Kushtia
                            </h5>
                            <p className="timeline-text">Department of statistics</p>
                        </div>
                        <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h6 className="timeline-date"><FontAwesomeIcon icon={faCalendarAlt} /> 2016-2018</h6>
                            <h4 className="timeline-title">Higher Secondary School Certificate (HSC) </h4>
                            <h5 className="timeline-title">
                            Carmicheal College, Rangpur
                            </h5>
                            <p className="timeline-text">Group of Science</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;