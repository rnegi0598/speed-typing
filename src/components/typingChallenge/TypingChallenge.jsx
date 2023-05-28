import React from "react";
import { sentences } from "../../utils/paragraph";
import "./typingchallenge.scss";
const TypingChallenge = ({ index, value }) => {
  const completed = sentences[index].slice(0, value.length);
  const pending = sentences[index].slice(value.length);
  return (
    <div className="display">
      <div className="display-sentence">
        {completed ? <span className="completed">{completed}</span> : null}
        {pending ? <span className="pending">{pending}</span> : null}
      </div>
    </div>
  );
};

export default TypingChallenge;
