import React, { useState } from "react";
import "./typinginput.scss";
import { sentences } from "../../utils/paragraph";

const TypingInput = ({
  index,
  setIndex,
  value,
  setValue,
  setTimer,
  setResult,
  inputRef,
}) => {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const inputHandler = (e) => {
    const inputValue = e.target.value;
    if (sentences[index].includes(inputValue)) {
      setCorrect((prevCount) => prevCount + 1);
      setValue(inputValue);
    } else {
      setIncorrect((prevCount) => prevCount + 1);
    }
    if (inputValue.length === sentences[index].length) {
      //clear input
      setValue("");
      //increment index
      if (index == sentences.length - 1) {
        setIndex(0);
      } else {
        setIndex((prevInd) => prevInd + 1);
      }
    }
    setResult({ correct, incorrect });
  };
  const startGame = () => {
    setTimer(true);
  };
  return (
    <div className="input-wrapper">
      {/* <div>{value}</div> */}
      <input
        ref={inputRef}
        value={value}
        onClick={startGame}
        onChange={inputHandler}
        placeholder="Enter the text to start the game . . ."
      />
    </div>
  );
};

export default TypingInput;
