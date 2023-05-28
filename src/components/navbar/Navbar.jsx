import React from "react";
import './navbar.scss'
const Navbar = ({ seconds,setSeconds,setTimer }) => {
    const resetHandler=()=>{
        //reset seconds to 60
        setSeconds(60);
        //stop the timer
        setTimer(false)
        //start the timer
        setTimer(true);
    }
  return (
    <div className="navbar">
    <div className="app-title">
        <p>Typing Tutor</p>
    </div>
      <div className="timer">
        <span className="digit-2">00</span>
        <span className="double-colon">:</span>
        <span className="digit-1">{seconds<10?`0${seconds}`:seconds}</span>
      </div>
      {/* <div className="reset">
        <button onClick={resetHandler}>Reset</button>
      </div> */}
    </div>
  );
};

export default Navbar;
