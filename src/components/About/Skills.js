import React from 'react';

const skillsData = [
    {
        id: 1,
        title: 'Javascript',
        skillPercent: '75%'
    }, {
        id: 2,
        title: 'React js',
        skillPercent: '70%'
    }, {
        id: 3,
        title: 'Node',
        skillPercent: '50%'
    }, {
        id: 4,
        title: 'Express',
        skillPercent: '50%'
    }, {
        id: 5,
        title: 'MongoDB',
        skillPercent: '40%'
    }, {
        id: 6,
        title: 'Html',
        skillPercent: '90%'
    }, {
        id: 7,
        title: 'Css',
        skillPercent: '80%'
    }, {
        id: 8,
        title: 'Bootstrap',
        skillPercent: '80%'
    }

]

const Skills = () => {
    return (
        <div className="skills">
            <h2 className="about-info-title">Programming Skills</h2>
            <div className="skills-container">
                {
                    skillsData.map(skill => <div key={skill.id} className="skill-item padd-15">
                        <h5>{skill.title}</h5>
                        <div className="progress">
                            <div className="progress-in" style={{ width: `${skill.skillPercent}` }}></div>
                            <div className="skill-percent">{skill.skillPercent}</div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Skills;