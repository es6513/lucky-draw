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
    <div className={cx(`${ROOT_CLASS}__timer-control-wrapper`)}>
      {/* <div>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>Add Count</button> */}
      <HeadTitle headTag="h3">抽獎時間</HeadTitle>
      <Timer timeupCallback={timeupCallback} />
      <div className={cx("timer-control-hint")}>
        說明:
        <br />
        倒數時間可接受任何正數 (ex:2 ,10, 0.5);
        <br />
        特殊字元, 負數, 或其他錯誤格式會無效 (ex: +002, 02 -1, 00.5);
        <br />
        倒數秒數為四捨五入後的結果;
        <br />
        若整體時間不足1秒,則以1秒計算;
      </div>
    </div>
  );
}

export default React.memo(TimeControl);
