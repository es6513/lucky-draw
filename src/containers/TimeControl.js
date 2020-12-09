import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setTimer } from "../redux/modules/timer/actions";
import HeadTitle from "../components/HeadTitle";
import Input from "../components/Input";
import Button from "../components/Button";

import { config } from "../config";
const { css } = config;
const { ROOT_CLASS } = css;

function TimeControl() {
  //Store

  const dispatch = useDispatch();

  const setStoreTimer = (timer) => {
    const payload = { timer: parseFloat(timer) };
    dispatch(setTimer(payload));
  };

  //Timer Form
  const {
    register: formRegister,
    formState,
    handleSubmit: submitForm,
  } = useForm({
    mode: "all",
    criteriaMode: "all",
  });

  const handleSubmit = (data) => {
    const { timer } = data;
    setStoreTimer(timer);
  };

  return (
    <div className={`${ROOT_CLASS}__time-control`}>
      <HeadTitle headTag="h3">抽獎時間</HeadTitle>
      <form
        className={`${ROOT_CLASS}__time-control__form`}
        onSubmit={submitForm((data) => handleSubmit(data))}
      >
        <Input
          inputName="timer"
          className={`${ROOT_CLASS}__time-control__form-input`}
          useFormRef={formRegister}
        />
        <span>分鐘</span>
        <Button
          className={`${ROOT_CLASS}__time-control__submit-button`}
          type="submit"
        >
          設定
        </Button>
      </form>
    </div>
  );
}

export default TimeControl;
