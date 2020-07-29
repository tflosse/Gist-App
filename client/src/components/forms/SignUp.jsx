import React from "react";
import "./Login.css";

// Needs username validation

const SignUpForm = (props) => {

  return (
    <form className="SignUpForm" onSubmit={props.handleSubmit}>
      <h4 className="Form-Title">Sign Up</h4>
      <div className="Form-Container">
        <label>Username: </label>
        <input
          className="Username--input"
          placeholder="Username"
          value={props.username}
          name="username"
          onChange={props.handleUsernameChange}
        />
        <br />
        <label>Email:</label>
        <textarea
          autosize
          className="Email--input"
          placeholder="Your email address"
          value={props.email}
          name="email"
          onChange={props.handleEmailChange}
        />
        <br />
        <label>Password: </label>
        <input
          className="Password--input"
          type="password"
          placeholder="Password"
          value={props.password}
          name="password"
          onChange={props.handlePasswordChange}
        />
     
      </div>
      <div className="Form-buttons">
        <button className="submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default SignUpForm;
