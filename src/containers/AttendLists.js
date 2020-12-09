import React from "react";
import HeadTitle from "../components/HeadTitle";

import { config } from "../config";
const { css } = config;
const { ROOT_CLASS } = css;

function AttendLists() {
  return (
    <div className={`${ROOT_CLASS}__attend-lists`}>
      <HeadTitle headTag="h3">參與抽獎名單</HeadTitle>
    </div>
  );
}

export default AttendLists;
