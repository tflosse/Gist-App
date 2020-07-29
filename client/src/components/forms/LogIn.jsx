import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const LoginForm = (props) => {
  const [display, setDisplay] = useState(false);

  return (
    <form className="LoginForm" onSubmit={props.handleSubmit}>
      <h4 className="Form-Title">Log In</h4>
      <div className="Form-Container">
        <label>Email:</label>
        <input
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
        <br />
      </div>

      <div className="Login-buttons-containr">
        <button
          onClick={() => setDisplay(true)}
          className="submit"
          type="submit"
        >
          Submit
        </button>

        <Link to="/signup">
          <button className="submit">Sign Up</button>
        </Link>
        </div>
        
        {display ? `${props.valid}` : ""}
      
      
    </form>
  );
};
export default LoginForm;
