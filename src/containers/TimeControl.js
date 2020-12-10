import React from "react";
import HeadTitle from "../components/HeadTitle";
import Timer from "../components/Timer";

import { config } from "../config";
const { css } = config;
const { ROOT_CLASS } = css;

function TimeControl() {
  return (
    <div className={`${ROOT_CLASS}__time-control`}>
      <HeadTitle headTag="h3">抽獎時間</HeadTitle>
      <Timer />
    </div>
  );
}

export default TimeControl;
