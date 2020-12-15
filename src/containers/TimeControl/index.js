import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import classnames from "classnames/bind";
import { toggleShowResult } from "store/modules/result/actions";
import { setLuckyPerson } from "store/modules/attendLists/actions";
import { COUNTDOWN_MAX_MINUTES } from "utils/timeConstants";
import HeadTitle from "components/HeadTitle";
import Timer from "components/Timer";
import styles from "./style.module.scss";
import { config } from "config";

const { css } = config;
const { ROOT_CLASS } = css;

const cx = classnames.bind(styles);

const timerHint = [
  {
    message: `可接受 0 ~ ${COUNTDOWN_MAX_MINUTES} 之正數`,
    ex: "(ex: 2 ,10, 0.5)",
  },
  {
    message: "含特殊字元, 負數, 空格或其他錯誤格式等會無效",
    ex: "(ex: +3, 02, -1, 00.5)",
  },
  {
    message: "倒數秒數為四捨五入後的結果",
  },
  {
    message: "若整體時間不足1秒, 則以1秒計算",
  },
];

function TimeControl() {
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
    <div className={cx(`${ROOT_CLASS}__timer-control-wrapper`)}>
      <HeadTitle headTag="h3">抽獎時間</HeadTitle>
      <Timer timeupCallback={timeupCallback} />
      <div className={cx("timer-control-hint")}>
        倒數時間說明:
        {timerHint.map((hint, index) => (
          <div key={index}>
            <div> {`${index + 1}. ${hint.message}`}</div>
            {hint.ex ? <div>{hint.ex}</div> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(TimeControl);
