import React from "react";
// import TimeControl from "./views/TimeControl";
// import AttendLists from "./views/AttendLists";
import "./styles/main.scss";

import { config } from "./config";
const { css } = config;
const { ROOT_CLASS } = css;

function App() {
  return (
    <div className={`${ROOT_CLASS}`}>
      {/* <TimeControl />
      <AttendLists /> */}
    </div>
  );
}

export default App;
