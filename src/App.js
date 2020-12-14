import React, { useCallback, useEffect, useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import TimeControl from "containers/TimeControl";
import AttendLists from "containers/AttendLists";
import Result from "containers/Result";
import "styles/main.scss";
import Count from "components/Count";

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
