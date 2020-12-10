import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setCountdownSeconds } from "../../redux/modules/timer/actions";
import { SECONDS_PER_MINUTE } from "../../utils/timeConstants";
import Input from "../Input";
import Button from "../Button";

function Timer() {
  const [localInputTime, setLocalInputTime] = useState(0);
  const isInitRender = useRef(true);
  const refCountTime = useRef();
  //Store
  const dispatch = useDispatch();
  const setStoreCountdownTime = (countdownMinutes) => {
    const payload = {
      countdownSeconds: parseFloat(countdownMinutes * SECONDS_PER_MINUTE),
    };
    dispatch(setCountdownSeconds(payload));
  };

  const storeCountdownSeconds = useSelector(
    (state) => state.timerReducer.countdownSeconds
  );
  //Side Effect

  useEffect(() => {
    if (isInitRender.current) {
      isInitRender.current = false;
      return;
    }
    refCountTime.current = storeCountdownSeconds;
    const countDown = (timerId) => {
      if (refCountTime.current > 0) {
        refCountTime.current--;
      } else {
        refCountTime.current = 0;
      }
      dispatch(setCountdownSeconds({ countdownSeconds: refCountTime.current }));
      if (refCountTime.current === 0) {
        console.log("end up");
        clearInterval(timerId);
      }
    };
    const timerId = setInterval(() => {
      countDown(timerId);
    }, 1000);
    console.log(timerId);

    return () => {
      console.log("clear", timerId);
      clearInterval(timerId);
    };
  }, [localInputTime]);
  //Timer Form
  const { register: formRegister, formState, handleSubmit } = useForm({
    mode: "all",
    criteriaMode: "all",
  });

  const startCountDown = (data) => {
    const { countdownMinutes } = data;
    setStoreCountdownTime(countdownMinutes);
    setLocalInputTime(countdownMinutes);
  };

  //Format Time
  const renderFormatCountdownTime = () => {
    let renderMinutes = Math.floor(storeCountdownSeconds / SECONDS_PER_MINUTE);
    let renderSeconds = storeCountdownSeconds % SECONDS_PER_MINUTE;
    renderMinutes = String(renderMinutes).padStart(2, 0);
    renderSeconds = String(renderSeconds).padStart(2, 0);
    const mmssFormatTime = `${renderMinutes}:${renderSeconds}`;
    return mmssFormatTime;
  };
  return (
    <div>
      <form onSubmit={handleSubmit(startCountDown)}>
        <Input inputName="countdownMinutes" useFormRef={formRegister} />
        <span>分鐘</span>
        <Button type="submit">設定</Button>
      </form>
      {renderFormatCountdownTime()}
    </div>
  );
}

export default Timer;
