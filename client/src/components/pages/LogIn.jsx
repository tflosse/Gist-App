import React from "react";
import LoginForm from "../forms/LogIn";
import './Login.css'

const Login = (props) => {

  return (
      <div className="Login-Page">
        {/* <video src="https://giphy.com/gifs/iD7itDenrgKXOTQmxP/html5"></video>  */}
        <img
        className="Login-logo" src="https://i.imgur.com/q3OUNkQ.png" alt="gist Logo"/>
        <LoginForm
          className="LoginForm"
          handleUsernameChange={props.handleUsernameChange}
          handlePasswordChange={props.handlePasswordChange}
          handleEmailChange={props.handleEmailChange}
          username={props.username}
          password={props.password}
          email={props.email}
          handleSubmit={props.handleSubmit}
          valid={props.valid}
        />
    </div>
  );
};

export default Login;
