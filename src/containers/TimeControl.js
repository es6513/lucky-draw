import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowResult } from "../redux/modules/result/actions";
import { setLuckyPerson } from "../redux/modules/attendLists/actions";
import HeadTitle from "../components/HeadTitle";
import Timer from "../components/Timer";

import { config } from "../config";
const { css } = config;
const { ROOT_CLASS } = css;

function TimeControl() {
  const dispatch = useDispatch();

  const openResult = () => {
    dispatch(toggleShowResult({ isResultShowed: true }));
  };

  const drawLuckyPerson = () => {
    dispatch(setLuckyPerson({ selectedId: 3 }));
  };

  const timeupCallback = () => {
    drawLuckyPerson();
    openResult();
  };
  return (
    <div className={`${ROOT_CLASS}__time-control`}>
      <HeadTitle headTag="h3">抽獎時間</HeadTitle>
      <Timer timeupCallback={timeupCallback} />
    </div>
  );
}

export default TimeControl;
