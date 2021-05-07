import React from 'react';
import BubblesParticlesBackground from '../ParticlesBackground/BubblesParticlesBackground';
import './About.css';
import Education from './Education';
import Experience from './Experience';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';
import Typical from 'react-typical';
import aboutImg from '../../images/about.jpg'

const typicalData = ['Frontend developer', 3000, 'React developer', 3000, 'Learner', 3000];

const About = () => {

    return (
        <>
            <BubblesParticlesBackground />
            <section id="about" className="about section ">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2 style={{textAlign:'center', }}>About Me</h2>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-content padd-15">
                            <div className="row">
                                <div className="about-text padd-15">
                                    <h3>I'm Fazle Rabbi <br/> <span style={{color:'#ff4790'}} ><Typical steps={typicalData} loop={Infinity} wrapper="span" /></span></h3>
                                    <p>Learning new thing is my one of the skill developing hobby and I always enjoy to learn new thing. For this reason I have been learning web design and development for a long time and I have build 10+ projects. To build project I have to know lots of new thing and I am developing my skill continuously</p>
                                </div>
                            </div>
                            <div className="row">
                            <PersonalInfo></PersonalInfo>
                                <div className="about-image padd-15">
                                    <img src={aboutImg} alt="" />
                                </div>
                                
                            </div>

                            <Skills></Skills>

                            <div className="row">
                                <Education></Education>
                                <Experience></Experience>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default About;