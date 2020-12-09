import React from "react";

import "./styles/main.scss";

import { config } from "./config";
const { css } = config;
const { ROOT_CLASS } = css;

function App() {
  return <div className={`${ROOT_CLASS}`}></div>;
}

export default App;
