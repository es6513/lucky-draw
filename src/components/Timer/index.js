import React, { useState, useEffect, useRef, useMemo } from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames/bind";
import { useForm } from "react-hook-form";
import { SECONDS_PER_MINUTE } from "utils/timeConstants";
import Button from "components/Button";
import ErrorHint from "components/ErrorHint";
import inputErrorMessages from "utils/errorMessage";

import styles from "./style.module.scss";
import HeadTitle from "components/HeadTitle";

const cx = classnames.bind(styles);

function Timer({ timeupCallback }) {
  const [countdownSeconds, setCountdownSeconds] = useState(0);
  const refCountTime = useRef();
  const countdownTimer = useRef();
  const render = useRef(0);
  //Timer Form
  const { register: formRegister, errors, handleSubmit } = useForm({
    mode: "all",
  });
  console.log(errors.inputMinutes);
  const isInputMinuetsInvalid = errors.inputMinutes ? true : false;

  //Timer process
  const setTimerSeconds = (data) => {
    let { inputMinutes } = data;
    let inputSeconds =
      parseFloat(inputMinutes * SECONDS_PER_MINUTE) < 1
        ? 1
        : Math.round(parseFloat(inputMinutes * SECONDS_PER_MINUTE));
    refCountTime.current = inputSeconds;
    setCountdownSeconds(inputSeconds);
  };

  const startCountdown = () => {
    const countDown = (timerId) => {
      if (refCountTime.current > 0) {
        refCountTime.current--;
      } else {
        refCountTime.current = 0;
      }
      if (refCountTime.current <= 0) {
        console.log("end up");
        clearInterval(timerId);
        timeupCallback();
      }
      setCountdownSeconds(refCountTime.current);
    };
    countdownTimer.current = setInterval(() => {
      countDown(countdownTimer.current);
    }, 1000);
  };

  const handleCountdownProcess = (data) => {
    console.log("count down");
    clearInterval(countdownTimer.current);
    setTimerSeconds(data);
    startCountdown();
  };

  useEffect(() => {
    return () => {
      clearInterval(countdownTimer.current);
    };
  }, []);

  //Format Time
  const renderFormatCountdownTime = () => {
    let renderMinutes = Math.floor(countdownSeconds / SECONDS_PER_MINUTE);
    let renderSeconds = countdownSeconds % SECONDS_PER_MINUTE;
    renderMinutes = String(renderMinutes).padStart(2, 0);
    renderSeconds = String(renderSeconds).padStart(2, 0);
    const mmssFormatTime = `${renderMinutes}:${renderSeconds}`;
    return mmssFormatTime;
  };
  const remainTime = useMemo(() => renderFormatCountdownTime(), [
    countdownSeconds,
  ]);
  return (
    <div className={cx("timer")}>
      <div>Render :{render.current++}</div>
      <form onSubmit={handleSubmit(handleCountdownProcess)}>
        <input
          name="inputMinutes"
          className={cx("timer-input", {
            "timer-input__invalid": isInputMinuetsInvalid,
          })}
          ref={formRegister({
            required: true,
            validate: {
              number: (value) => !isNaN(value),
              bePositive: (value) => value > 0,
            },
          })}
        ></input>
        <span className={cx("timer-input__suffix")}>分鐘</span>
        <Button
          type="submit"
          data-color="submit"
          data-radius="general"
          data-size="md"
          className={cx("timer-submit-button")}
        >
          設定
        </Button>
        {errors.inputMinutes ? (
          <ErrorHint message={inputErrorMessages[errors.inputMinutes?.type]} />
        ) : null}
      </form>
      <div className={cx("timer-remaintime")}>{remainTime}</div>
      <div className={cx("timer-hint")}>
        說明:
        <br />
        秒數為四捨五入後的結果;
        <br />
        若不足1秒,則以1秒計算;
      </div>
    </div>
  );
}

export default Timer;

Timer.propTypes = {
  timeupCallback: PropTypes.func.isRequired,
};
