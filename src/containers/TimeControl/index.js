import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import classnames from "classnames/bind";
import { toggleShowResult } from "store/modules/result/actions";
import { setLuckyPerson } from "store/modules/attendLists/actions";
import HeadTitle from "components/HeadTitle";
import Timer from "components/Timer";

import styles from "./style.module.scss";
import { config } from "config";

const { css } = config;
const { ROOT_CLASS } = css;

const cx = classnames.bind(styles);

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
        說明:
        <br />
        1. 倒數分鐘可接受 0 ~ 150,119,987,579,016 分鐘;
        <br />
        2. 倒數時間可接受任何正數 (ex:2 ,10, 0.5);
        <br />
        3. 含特殊字元, 負數, 空格或其他錯誤格式會無效 (ex: +3, 02, -1, 00.5);
        <br />
        4. 倒數秒數為四捨五入後的結果;
        <br />
        5. 若整體時間不足1秒,則以1秒計算;
      </div>
    </div>
  );
}

export default React.memo(TimeControl);
