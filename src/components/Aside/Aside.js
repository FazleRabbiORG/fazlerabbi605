
import { faComments, faUser, faBriefcase, faEnvelope, faHome, faList, faDownload, faToggleOn, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Aside.css';
import sideImg from "../../images/Emon.png";

const Aside = () => {

    const { pathname } = useLocation();
    let mainPath = pathname.split('/')[1];

    if (!mainPath) {
        mainPath = 'home'
    }

    const handleSidebar = () => {
        const navTogglerBtn = document.querySelector('.nav-toggler');
        const aside = document.querySelector('.aside');
        aside.classList.toggle('open');
        navTogglerBtn.classList.toggle('open');
    }

    return (
        <div className="aside">

            <div onClick={handleSidebar} className="nav-toggler">
                <span></span>
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </div>

            <div style={{borderRight:"20px solid #5e13e5"}} className="aside-inner">
                <div className="logo">
                    <Link to="/"><img style={{borderRadius:'50%', height:'150px'}} src={sideImg} alt="Fazle Rabbi"/></Link>
                    <h5 style={{color:'#ff4790'}}>Frontend web developer</h5>
                </div>

                <div  className=" ">
                    
                    <ul id="nav" className="nav">
                    <li onClick={handleSidebar}><Link to="/home" className={mainPath === 'home' ? 'active' : undefined}> <span><FontAwesomeIcon icon={faHome} /></span> Home</Link></li>
                    <li onClick={handleSidebar}><Link to="/about" className={mainPath === 'about' ? 'active' : undefined}><FontAwesomeIcon icon={faUser} /> About</Link></li>
                    <li onClick={handleSidebar}><Link to="/projects" className={mainPath === 'projects' ? 'active' : undefined}><FontAwesomeIcon icon={faBriefcase} /> Projects</Link></li>
                    {/* <li onClick={handleSidebar}><Link to="/service" className={mainPath === 'service' ? 'active' : undefined}><FontAwesomeIcon icon={faList} /> Services</Link></li> */}
                    <li onClick={handleSidebar}><Link to="/blog" className={mainPath === 'blog' ? 'active' : undefined}><FontAwesomeIcon icon={faEnvelope} /> Blog</Link></li>
                    <li onClick={handleSidebar}><Link to="/contact" className={mainPath === 'contact' ? 'active' : undefined}><FontAwesomeIcon icon={faComments} /> Contact</Link></li>
                    <li><a className="resume-btn" href="https://drive.google.com/uc?export=download&id=1KvW6hsnTWlJoWpThwU7kANQvDbmDBaTd" ><FontAwesomeIcon icon={faDownload} /> Resume</a></li>
                    {/* <li><a className="resume-btn" href="https://drive.google.com/file/d/1KvW6hsnTWlJoWpThwU7kANQvDbmDBaTd/view?usp=sharing" ><FontAwesomeIcon icon={faDownload} /> Resume</a></li> */}
                    {/* https://docs.google.com/document/d/1pouUzYkVu6D-we_RPwGFWZfaJUSNEteRWnVww5L4haA/edit?usp=sharing */}
                    </ul>
                    
                </div>

                {/* <div className="copyright-text">
                    &copy; { new Date().getFullYear() } <h4>Fazle Rabbi</h4> <p>Frontend developer</p>
                 </div> */}
            </div>
        </div>
    );
};

export default Aside;