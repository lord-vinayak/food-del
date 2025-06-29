import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import RingInput from "../../../components/comp-05";
import EmailIconInput from "../../../components/comp-10";
import PasswordInput from "../../../components/comp-23";
import ClickMe from "../../../components/comp-86"; // Assuming this is a component you want to use
import CrossIcon from "../../../components/comp-97"; // Assuming this is a component you want to use


const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          {/* <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt=""
          /> */}
          <div onClick={() => setShowLogin(false)}>
            <CrossIcon />
          </div>
        </div>
        <div className="login-popup-inputs flex flex-col gap-2">
          {currState === "Login" ? (
            <></>
          ) : (
            // <input type="text" placeholder="Your name" required />

            <RingInput placeholderText="What's your name?" />
          )}
          {/* <input type="email" placeholder="Your email" required /> */}

          <EmailIconInput />

          <PasswordInput />
        </div>
        <button>
          {currState === "Sign Up" ? (
            <ClickMe ButtonText="Create Account" />
          ) : (
            <ClickMe ButtonText="Login" />
          )}
        </button>

        {currState === "Login" ? (
          <p>
            New here?{" "}
            <span onClick={() => setCurrState("Sign Up")}>
              Create an account
            </span>
          </p>
        ) : (
          <p>
            Existing user?{" "}
            <span onClick={() => setCurrState("Login")}>Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
