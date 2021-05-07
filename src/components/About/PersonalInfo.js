import React from 'react';
import { Link } from 'react-router-dom';

const personalInfoData = [
    {
        id: 1,
        title: 'Birthday',
        data: '03 january 1999'
    },
    {
        id: 2,
        title: 'Age',
        data: 23
    },
    {
        id: 3,
        title: 'Website',
        data: 'dev92.web.app'
    }, {
        id: 4,
        title: 'Email',
        data: 'fazlerabbi.dev92@gmail.com'
    }, {
        id: 5,
        title: 'Passion',
        data: 'Coding'
    }, {
        id: 6,
        title: 'Phone',
        data: '+880 1789606089'
    }, {
        id: 7,
        title: 'City',
        data: 'Bogura'
    }
]

const PersonalInfo = () => {
    return (
        <div className="personal-info padd-15">
            <h3 className="padd-15 about-info-title">Personal Info</h3>
            <div className="row">
                {
                    personalInfoData.map(info => <div key={info.id} className="info-item padd-15">
                        <p>{info.title} : <span>{info.data}</span></p>
                    </div>)
                }
            </div>
            <div className="row">
                <div className="buttons padd-15">
                    <a href="/" style={{border:"5px solid #ff4790"}} className="btn">Resume</a>
                    <Link to="/contact" style={{border:"5px solid #ff4790"}} className="btn hire-me">Hire Me</Link>
                </div>
            </div>
        </div>
    );
    

};

export default PersonalInfo;