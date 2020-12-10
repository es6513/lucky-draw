import { useState, useEffect, useRef } from "react";

function useCountdown(timeUpCallBack, countTimeSeconds) {
  const [remainTime, setRemainTime] = useState(0);
  const refCallBack = useRef();
  const refCountTime = useRef();
  const isInitRender = useRef(true);

  useEffect(() => {
    refCallBack.current = timeUpCallBack;
  }, [timeUpCallBack]);

  useEffect(() => {
    if (isInitRender.current) {
      isInitRender.current = false;
      return;
    }
    refCountTime.current = countTimeSeconds;
    setRemainTime(countTimeSeconds);

    const countDown = (timerId) => {
      if (refCountTime.current > 0) {
        refCountTime.current--;
      } else {
        refCountTime.current = 0;
      }
      setRemainTime(refCountTime.current);

      if (refCountTime.current === 0) {
        refCallBack.current();
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
  }, [countTimeSeconds]);

  return remainTime;
}

export default useCountdown;
