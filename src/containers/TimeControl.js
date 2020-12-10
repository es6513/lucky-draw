import React, { useState } from "react";
import HeadTitle from "../components/HeadTitle";
import Timer from "../components/Timer";

import { config } from "../config";
const { css } = config;
const { ROOT_CLASS } = css;

function TimeControl() {
  const [showTimer, setShowTimer] = useState(true);
  const removeTimer = () => {
    setShowTimer((showTimer) => !showTimer);
  };
  return (
    <div className={`${ROOT_CLASS}__time-control`}>
      <HeadTitle headTag="h3">抽獎時間</HeadTitle>
      {showTimer ? <Timer /> : null}

      <button onClick={removeTimer}>Remove Timer</button>
    </div>
  );
}

export default TimeControl;
