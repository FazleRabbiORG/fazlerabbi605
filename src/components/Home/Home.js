import React from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faMedium, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import HomeImage from '../../images/Emon.png';
import SimpleParticlesBackground from '../ParticlesBackground/SimpleParticlesBackground';
import Typical from 'react-typical';
const Home = () => {
    const typicalData = ['Frontend developer', 3000, 'React developer', 3000, 'Learner', 3000];
    return (
        <>
            <div className="particles-bg">
                <SimpleParticlesBackground />
            </div>
            <section id="home" className="home section">
                <div className="container">
                    <div className="intro">
                        <img src={HomeImage} alt="profile" className="shadow-dark" />
                        {/* <h2 style={{color:'#ff4790',marginTop:'20px'}} >Hello !</h2> */}
                        <h1>Fazle Rabbi</h1>
                        <h2 style={{color:'#ff4790'}} ><Typical steps={typicalData} loop={Infinity} wrapper="span" /></h2>
                        {/* <p>Frontend web developer</p> */}
                        <div className="social-links">
                            <a href="https://github.com/fazlerabbi-dev92" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://www.linkedin.com/in/fazlerabbi-dev92/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href="https://www.facebook.com/fazlerabbi-dev92" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="https://www.instagram.com/fazlerabbi-dev92" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://twitter.com/fazlerabbi-dev92" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="https://www.pinterest.com/fazlerabbi-dev92" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faPinterest} /></a>
                            <a href="https://www.medium.com/@fazlerabbi-dev92" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faMedium} /></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;