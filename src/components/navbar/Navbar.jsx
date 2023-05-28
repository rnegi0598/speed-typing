import React from "react";
import "./navbar.scss";
const Navbar = ({ seconds, setSeconds, setTimer }) => {
  return (
    <div className="navbar">
      <div className="app-title">
        <p>Typing Tutor</p>
      </div>
      <div className="timer">
        <span className="digit-2">00</span>
        <span className="double-colon">:</span>
        <span className="digit-1">
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
