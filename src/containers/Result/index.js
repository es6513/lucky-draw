import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames/bind";
import { toggleShowResult } from "store/modules/result/actions";
import Lightbox from "components/Lightbox";
import Avatar from "components/Avatar";
import HeadTitle from "components/HeadTitle";
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
      <HeadTitle className={cx("result-name")} headTag="h4">
        {`Name: ${luckyPerson.name}`}
      </HeadTitle>
      <HeadTitle className={cx("result-number")} headTag="h4">
        {`ID: ${luckyPerson.id}`}
      </HeadTitle>
    </Lightbox>
  );
}

export default Result;
