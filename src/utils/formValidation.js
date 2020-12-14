import { SECONDS_PER_MINUTE } from "./timeConstants";

const inputFormat = /^(?!0\d)(?:\d+)(?:[.,]\d+)?$/;

export const inputMinutesValidation = {
  required: true,
  pattern: /^(?!0\d)(?:\d+)(?:[.,]\d+)?$/,
  validate: {
    isOverMax: (value) =>
      !isNaN(value) && value < Number.MAX_SAFE_INTEGER / SECONDS_PER_MINUTE,
    isNumber: (value) => !isNaN(value),
    isPositive: (value) => value > 0,
  },
};

export const inputErrorMessages = {
  required: "請輸入倒數時間",
  pattern: "格式錯誤,請參考說明",
  isOverMax: "超過最大可倒數時間",
  isNumber: "請輸入數字",
  isPositive: "需輸入大於0之數字",
};
