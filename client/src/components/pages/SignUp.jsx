import React from "react";
import SignUpForm from "../forms/SignUp";
import './Login.css';

const Login = (props) => {
  return (
      <>
        <SignUpForm
            handleUsernameChange={props.handleUsernameChange}
            handlePasswordChange={props.handlePasswordChange}
            handleEmailChange={props.handleEmailChange}
            username={props.username}
            password={props.password}
            email={props.email}
            handleSubmit={props.handleSubmit}
        />
    </>
  );
};
export default Login;