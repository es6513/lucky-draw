import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames/bind";
import { toggleShowResult } from "store/modules/result/actions";
import Lightbox from "components/Lightbox";
import Avatar from "components/Avatar";
import styles from "./style.module.scss";

const cx = classnames.bind(styles);

function Result() {
  const dispatch = useDispatch();
  const closeResult = () => {
    dispatch(toggleShowResult({ isResultShowed: false }));
  };

  const luckyPerson = useSelector((state) => state.listsReducer.luckyPerson);
  return (
    <Lightbox title="抽獎結果" handleClose={closeResult}>
      <Avatar className={cx("result-avatar")} gender={luckyPerson.gender} />
      <span>{luckyPerson.name}</span>
    </Lightbox>
  );
}

export default Result;
