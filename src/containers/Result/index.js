import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowResult } from "store/modules/result/actions";
import Lightbox from "components/Lightbox";

function Result() {
  const dispatch = useDispatch();
  const closeResult = () => {
    dispatch(toggleShowResult({ isResultShowed: false }));
  };

  const luckyPerson = useSelector((state) => state.listsReducer.luckyPerson);
  return (
    <div>
      <Lightbox title="抽獎結果" handleClose={closeResult}>
        {luckyPerson.name}
      </Lightbox>
    </div>
  );
}

export default Result;
