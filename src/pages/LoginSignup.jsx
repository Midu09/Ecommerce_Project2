import React from "react";
import "./Css/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Signup</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have account? <span>Login</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" id="" />
          <p>dong y voi dieu khoan</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
