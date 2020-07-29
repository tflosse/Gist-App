import React from 'react';
import "./About.css";
import gitIcon from './gitIcon.svg';
import linkedIcon from './linkedIcon.svg';

const About = () => {

    return(
        <div className="About-page Logged-views">
            <div className="App-container">
                <h4>About <span className="gist-brand">gist/</span></h4>
                <p> <span className="gist-brand">gist/</span> was born of a collaboration between two Junior developers
                looking for projects to build their portfolios. What started as a 
                    We provide innovators, developers, and creators a communication 
                    platform to post, read, and comment on ideas. We encourage them 
                    to build new relationships over common interests and potential 
                    future ventures.</p>
            </div>
            <div className="Team-container">
                <h4>Team</h4>
                <div className="about-team"> 
                    <div className="member-container">
                        <div className="member--picture" id="tam-div">
                            <img src="https://i.imgur.com/MQHeFb2.jpg" alt="tam-profile"/>
                        </div>
                        <div className="member--titles">
                            <h4>Tamara Flosse</h4>
                            <h5>Scrummy Product Owner</h5>
                        </div>
                        <div className="member--description">
                            <p>As the Product Owner of this project, I mapped out our execution plan and 
                                engaged our team around a common vision.
                                I built the architecture for the app and created models and back-end routes 
                                with UX in mind to ensure seemless front-end integration. It was a rewarding 
                                first experience working full-stack with a team, 
                                especially collaborating on front-end features. 
                                I am excited for the projects that might be born here!</p>
                        </div>
                        <div className="member--links">
                            <button><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tflosse/"><img className="linked-button" src={linkedIcon} alt="LinkedIn Logo" /></a></button>
                            <button><a target="_blank" rel="noopener noreferrer" href="https://github.com/tflosse"><img className="github-button" src={gitIcon} alt="GitHub Logo" /></a></button>
                        </div>
                    </div>   
                    <div className="member-container">
                        <div className="member--picture" id="nick-div">
                            <img src="https://i.imgur.com/wf3ZXNX.jpg" alt="nick-profile"/>
                        </div>
                        <div className="member--titles">
                            <h4>Nick diPreta</h4>
                            <h5>Web Plumber</h5>
                        </div>
                        <div className="member--description">
                            <p>I am a full-stack software engineer and Cornell University Alumnus. 
                                I focused on connecting the front and back-end, implemented user 
                                authentication and log in functionalities, handled deployment, and 
                                enjoyed experimenting with other APIs and libraries to enhance user 
                                experience and security as I continue to learn lots about latest tech trends.</p>
                        </div>
                        <div className="member--links">
                            <button><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nicholas-dipreta/"><img className="linked-button" src={linkedIcon} alt="LinkedIn Logo" /></a></button>
                            <button><a target="_blank" rel="noopener noreferrer" href="https://github.com/NickDiPreta"><img className="github-button" src={gitIcon} alt="GitHub Logo" /></a></button>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
};
export default About;
