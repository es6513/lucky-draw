import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TimeControl from "containers/TimeControl";
import AttendLists from "containers/AttendLists";
import Result from "containers/Result";
import "styles/main.scss";

import { config } from "./config";
const { css } = config;
const { ROOT_CLASS } = css;

function App() {
  const isResultShowed = useSelector(
    (state) => state.resultReducer.isResultShowed
  );
  return (
    <div className={`${ROOT_CLASS}`}>
      <TimeControl />
      <AttendLists />
      {isResultShowed ? <Result /> : null}
    </div>
  );
}

export default App;
