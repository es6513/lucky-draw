import { useState, useEffect, useRef } from "react";
import { SECONDS_PER_MINUTE } from "utils/timeConstants";

function useTimer(timeupCallback) {
  const [countdownSeconds, setCountdownSeconds] = useState(0);
  const refCountTime = useRef();
  const countdownTimer = useRef();
  //Timer process
  const setTimerSeconds = (data) => {
    let { inputMinutes } = data;
    let inputSeconds =
      parseFloat(inputMinutes * SECONDS_PER_MINUTE) < 1
        ? 1
        : Math.round(parseFloat(inputMinutes * SECONDS_PER_MINUTE));
    refCountTime.current = inputSeconds;
    console.log(inputSeconds);
    setCountdownSeconds(inputSeconds);
  };

  const startCountdown = () => {
    console.log("start count down");
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

  const startTimer = (data) => {
    clearInterval(countdownTimer.current);
    setTimerSeconds(data);
    startCountdown();
  };

  useEffect(() => {
    return () => {
      console.log("clear timer", countdownTimer.current);
      clearInterval(countdownTimer.current);
    };
  }, []);
  return [countdownSeconds, startTimer];
}

export default useTimer;
