import React from "react";
import './Landing.css';

const Landing = (props) => {

    return (
        <div className="Landing-Page">
            <div className="Welcome-Message">
                <h3>Welcome,<br />
                this is <span className="brand">gist/</span></h3>
                <p>
                A platform where innovators and developers share ideas, bid on projects, find collaborators, and start ventures.
                </p>
                <button className="submit" type="submit">
                Enter <span class="material-icons">login</span>
                </button>
            </div>
            <div className="Logo-Container">
                <img className="Landing-logo" src="https://s7.gifyu.com/images/ezgif.com-gif-makerf2dceeab40fe4b71.gif" alt="gist Logo"/>  
            </div>
        </div>
    );
  };
  
  export default Landing;