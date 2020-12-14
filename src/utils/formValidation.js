export const inputMinutesValidation = {
  required: true,
  max: Number.MAX_SAFE_INTEGER / 60,
  validate: {
    number: (value) => !isNaN(value),
    bePositive: (value) => value > 0,
  },
  pattern: /^(?!0\d)(?:\d+)(?:[.,]\d+)?$/,
};

export const inputErrorMessages = {
  required: "請輸入倒數時間",
  max: "超過最大可倒數時間",
  number: "請輸入數字",
  bePositive: "需輸入大於0之數字",
  pattern: "格式錯誤,請參考說明",
};
