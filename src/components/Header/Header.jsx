import React, { useRef } from "react";
import "./Header.css";
import TrueFocus from "./TrueFocus";
import Typewriter from "../../fancy/components/text/typewriter";

const Header = ({ onScrollClick }) => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>
          Welcome to the <br />
          <span className="header-title">
            <TrueFocus
              sentence="Techno App"
              manualMode={false}
              blurAmount={5}
              borderColor="white"
              animationDuration={1}
              pauseBetweenAnimations={0.8}
            />
          </span>
        </h2>
        <p>
          <span>One stop for all your </span>
          <Typewriter
            text={[
              "hourly needs",
              "food cravings",
              "party shopping",
              "meetups",
            ]}
            speed={70}
            waitTime={1500}
            deleteSpeed={40}
            cursorChar={"_"}
          />
        </p>
      </div>
      <button onClick={onScrollClick} className="btn-grad">
        View Menu
      </button>
    </div>
  );
};

export default Header;
