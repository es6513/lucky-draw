import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleShowResult } from "store/modules/result/actions";
import { setLuckyPerson } from "store/modules/attendLists/actions";
import HeadTitle from "components/HeadTitle";
import Timer from "components/Timer";
import { config } from "config";
const { css } = config;
const { ROOT_CLASS } = css;

function TimeControl() {
  // const [count, setCount] = useState(0);

  //Redux Store
  const dispatch = useDispatch();

  const openResult = () => {
    dispatch(toggleShowResult({ isResultShowed: true }));
  };

  const drawLuckyPerson = () => {
    dispatch(setLuckyPerson());
  };

  const timeupCallback = useCallback(() => {
    drawLuckyPerson();
    openResult();
  }, [dispatch]);

  return (
    <div className={`${ROOT_CLASS}__time-control-wrapper`}>
      {/* <div>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>Add Count</button> */}
      <HeadTitle headTag="h3">抽獎時間</HeadTitle>
      <Timer timeupCallback={timeupCallback} />
    </div>
  );
}

export default React.memo(TimeControl);
