import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import './StyleSwitcher.css'

const StyleSwitcher = () => {


    const [defaultTheme, setDefaultTheme] = useState(sessionStorage.getItem('theme') || 'dark');

    const handleTheme = () => {
        setDefaultTheme(sessionStorage.getItem('theme'))
    }

    document.body.className = defaultTheme;

    const handleBackgroundChange = (e) => {
        if (e.target.value === 'dark') {
            sessionStorage.setItem('theme', 'dark')
        }
        else if (e.target.value === 'navy-blue') {
            sessionStorage.setItem('theme', 'navy-blue')
        }
        else {
            sessionStorage.setItem('theme', ' ')
        }
        handleTheme()
    }


    const handleStyleSwitcher = () => {
        document.querySelector('.style-switcher').classList.toggle('open');
    }

    const links = document.querySelectorAll('.skin-css');
    const totalLinks = links.length;

    const handleSkinChange = (color) => {
        for (let i = 0; i < totalLinks; i++) {
            if (color === links[i].getAttribute('title')) {
                links[i].removeAttribute('disabled');
            }
            else {
                links[i].setAttribute('disabled', 'true');
            }
        }
    }

    const skinColor = ['pink', 'blue', 'orange', 'yellow', 'green']
    function delay() {
        return new Promise(resolve => setTimeout(resolve, 4000));
    }
    async function delayedLog(item) {
        for (let i = 0; i < skinColor.length; i++) {
            const color = skinColor[i];
            handleSkinChange(color)
            await delay();
        }
    }
    setInterval(() => {
        delayedLog()
    }, 20000)

    return (
        <div >
            {/* <div onClick={handleStyleSwitcher} className="toggle-style-switcher">
                <FontAwesomeIcon className="fa-spin" icon={faCog} />
            </div>

            <h3>Theme</h3>
            <label>
                <input onClick={handleBackgroundChange} type="radio" name="body-style" value="navy-blue" defaultChecked={defaultTheme === 'navy-blue' && true} />
                Navy blue
            </label>
            <br />
            <label>
                <input onClick={handleBackgroundChange} type="radio" name="body-style" value="dark" defaultChecked={defaultTheme === 'dark' && true} />
                Dark
            </label>
            <br />
            <label>
                <input onClick={handleBackgroundChange} type="radio" name="body-style" value="light" defaultChecked={defaultTheme === ' ' && true} />
                Light
            </label> */}
        </div>
    );
};

export default StyleSwitcher;