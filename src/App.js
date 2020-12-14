import React, { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
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

  const countObj = useSelector((state) => ({
    count2: state.resultReducer.count2,
  }));
  const dispatch = useDispatch();
  const addCount = () => {
    dispatch({ type: "ADD_COUNT2" });
  };
  return (
    <div className={`${ROOT_CLASS}`}>
      Count2:{countObj.count2}
      <button onClick={addCount}>ADD_COUNT</button>
      <TimeControl />
      <AttendLists />
      {isResultShowed ? <Result /> : null}
    </div>
  );
}

export default App;
