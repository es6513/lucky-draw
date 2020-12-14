import { SECONDS_PER_MINUTE } from "./timeConstants";

export const inputMinutesValidation = {
  required: true,
  pattern: /^(?!0\d)(?:\d+)(?:[.,]\d+)?$/,
  validate: {
    isNumber: (value) => !isNaN(value),
    isOverMax: (value) => value < Number.MAX_SAFE_INTEGER / SECONDS_PER_MINUTE,
    isPositive: (value) => value > 0,
  },
};

export const inputErrorMessages = {
  required: "請輸入倒數時間",
  pattern: "時間格式錯誤,請參考說明",
  isNumber: "請輸入數字",
  isOverMax: "超過最大可倒數時間",
  isPositive: "請輸入大於0之數字",
};
