import React  from 'react';
import Particles from 'react-particles-js';

const particlesConfigs = {
    "particles": {
        "number": {
            "value": 100
        },
        "size": {
            "value": 3
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
}


let theme = document.querySelector('body').classList;

console.log(theme);
if (theme.value === ' ') {
    particlesConfigs.particles.color = {
        value: '#5e13e5'
    }
}

const SimpleParticlesBackground = () => {
    return (
        <Particles params={particlesConfigs} />
    );
};

export default SimpleParticlesBackground;