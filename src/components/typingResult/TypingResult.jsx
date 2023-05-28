import React from "react";
import "./typingResult.scss";
const TypingResult = ({ result, seconds }) => {
  const { correct, incorrect } = result;
  const time = 30 - seconds;
  const totalWords = correct + incorrect;
  const wpm = time === 0 ? 0 : Math.floor((totalWords * 60) / 5 / time);
  const accuracy = Number.isNaN((correct / totalWords) * 100)
    ? 0
    : Math.floor((correct / totalWords) * 100);
  return (
    <div className="result-wrapper">
      <div className="result">
        <div className="wpm">
          <span className="title">WPM</span>
          <span> : </span>
          <span>{wpm}</span>
        </div>
        <div className="accuracy">
          <span className="title">Accuracy</span>
          <span> : </span>
          <span>{accuracy}</span>
          <span>%</span>
        </div>
      </div>
    </div>
  );
};

export default TypingResult;
