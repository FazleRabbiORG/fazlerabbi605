import React from "react";
import "./Projects.css";
import project1 from "../../images/projects/project1.png";
import project2 from "../../images/projects/project2.png";
import project3 from "../../images/projects/project3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
    faArrowRight,
  faExternalLinkAlt,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import NightySkyParticlesBackground from "../ParticlesBackground/NightySkyParticlesBackground";
import { projectsInfo } from "./ProjectsInfo/ProjectsInfo";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import  { useState } from 'react';
import { faClosedCaptioning, faTimesCircle } from "@fortawesome/free-regular-svg-icons";
// import Warper from './Warper';


const Projects = () => {
  const handleProjectFilter = (e) => {
    const filterContainer = document.querySelector(".projects-filter");
    const projectsItems = document.querySelectorAll(".projects-box");
    const totalProjectsItem = projectsItems.length;
    filterContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    const filterValue = e.target.getAttribute("project-filter");
    for (let k = 0; k < totalProjectsItem; k++) {
      if (filterValue === projectsItems[k].getAttribute("project-category")) {
        projectsItems[k].classList.remove("hide");
        projectsItems[k].classList.add("show");
      } else {
        projectsItems[k].classList.remove("show");
        projectsItems[k].classList.add("hide");
      }
      if (filterValue === "all") {
        projectsItems[k].classList.remove("hide");
        projectsItems[k].classList.add("show");
      }
    }
  };

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <>
      <NightySkyParticlesBackground></NightySkyParticlesBackground>
      <section id="projects" className="projects section">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2 style={{textAlign:'center'}} >Projects</h2>

              <hr />
            </div>
          </div>
          <div className="row">
            <div className="projects-filter padd-15">
              <button
                onClick={handleProjectFilter}
                type="button"
                className="active projectBtn"
                project-filter="all"
              >
                All
              </button>
              <button
              className=" projectBtn"
                onClick={handleProjectFilter}
                type="button"
                project-filter="react"
              >
                React
              </button>
              <button
              className=" projectBtn"
                onClick={handleProjectFilter}
                type="button"
                project-filter="full-stack"
              >
                Full Stack
              </button>
              <button
              className=" projectBtn"
                onClick={handleProjectFilter}
                type="button"
                project-filter="html-css"
              >
                Html, Css
              </button>
            </div>
          </div>
          <div className="row">
            {projectsInfo.map((project) => (
              <div
                key={project.id}
                className="projects-box padd-15"
                project-category={project.projectCategory}
              >
                <div className="projects-item shadow-dark">
                  <div className="projects-img">
                    
                    <img src={project.image} alt="projects" />
                  </div>
                  <div className="projects-info">
                    <h2>{project.projectName}</h2>
                    <div className="shareIcon-container">
                    <Link className='shareIcon' to={{ pathname:`${project.githubLink}`}} target="_blank" > <FontAwesomeIcon icon={faGithub}/></Link>
                    <a className='shareIcon' href={project.liveLink} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faExternalLinkAlt}/></a>
                    </div>
                    <hr />
                    <p className="description">{project.description}</p>
                    <p className="technology-used">
                      {project.technologyUsed.map((technology, index) => (
                        <span key={index}>{technology}</span>
                      ))}
                    </p>
                    <div className="description" style={{color:'black'}}>
                        <p>
                            <li >{project.features1}</li><hr />
                            <li>{project.features2}</li><hr />
                            <li>{project.features3}</li><hr />
                            <li>{project.features3}</li>
                        </p>
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
