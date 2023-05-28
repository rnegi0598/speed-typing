import React, { useEffect, useRef, useState } from "react";
import { sentences } from "./utils/paragraph";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import TypingInput from "./components/typingInput/TypingInput";
import TypingChallenge from "./components/typingChallenge/TypingChallenge";
import TypingResult from "./components/typingResult/TypingResult";

const App = () => {
  const [timer, setTimer] = useState(false);
  const [seconds, setSeconds] = useState(30);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [result, setResult] = useState({correct:0,incorrect:0});
  const inputRef=useRef(null)
  useEffect(() => {
    let timerId = -1;
    if (timer) {
      setSeconds(30);
      timerId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds == 0) {
            inputRef.current.blur();
            clearInterval(timerId);
            setTimer(false);
            setValue('')

            return prevSeconds;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerId);
      
    }

    return () => {
      return clearInterval(timerId);
    };
  }, [timer]);

  return (
    <div className="app">
      <Navbar seconds={seconds} setSeconds={setSeconds} setTimer={setTimer} />
      <TypingChallenge index={index} value={value} />
      <TypingInput
        value={value}
        setValue={setValue}
        index={index}
        setIndex={setIndex}
        setTimer={setTimer}
        setResult={setResult}
        inputRef={inputRef}
      />
      <TypingResult  result={result} seconds={seconds} />
    </div>
  );
};

export default App;
