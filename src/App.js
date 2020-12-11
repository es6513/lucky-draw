import React, { useState } from "react";
import TimeControl from "./containers/TimeControl";
import AttendLists from "./containers/AttendLists";
import Result from "./containers/Result";
import "./styles/main.scss";

import { config } from "./config";
const { css } = config;
const { ROOT_CLASS } = css;

function App() {
  const [isResultShowed, setIsResultShowed] = useState(false);
  const setShowResult = () => {
    setIsResultShowed((isResultShowed) => !isResultShowed);
  };
  const timeUpCallback = () => {
    setIsResultShowed(true);
  };
  return (
    <div className={`${ROOT_CLASS}`}>
      <TimeControl />
      <AttendLists />
      <button onClick={setShowResult}>Show Result</button>
      {isResultShowed ? <Result /> : null}
    </div>
  );
}

export default App;
