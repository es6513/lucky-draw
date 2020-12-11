import React, { useState, useEffect, useRef, useMemo } from "react";
import { PropTypes } from "prop-types";
import { useForm } from "react-hook-form";
import { SECONDS_PER_MINUTE } from "../../utils/timeConstants";
import Input from "../Input";
import Button from "../Button";

function Timer({ timeupCallback }) {
  const [countdownSeconds, setCountdownSeconds] = useState(0);
  const refCountTime = useRef();
  const countdownTimer = useRef();

  //Timer Form
  const { register: formRegister, formState, handleSubmit } = useForm({
    mode: "all",
    criteriaMode: "all",
  });

  //Timer process
  const setTimerSeconds = (data) => {
    let { inputMinutes } = data;
    let inputSeconds = parseFloat(inputMinutes * SECONDS_PER_MINUTE);
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
    <div>
      <form onSubmit={handleSubmit(handleCountdownProcess)}>
        <Input inputName="inputMinutes" useFormRef={formRegister} />
        <span>分鐘</span>
        <Button type="submit">設定</Button>
      </form>
      {remainTime}
    </div>
  );
}

export default Timer;

Timer.propTypes = {
  timeupCallback: PropTypes.func.isRequired,
};
