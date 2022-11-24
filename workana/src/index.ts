// https://webpack.js.org/guides/getting-started/

console.log("\n npm start packagejson main index.ts yarm powershell\n");

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { reportWebVitals } from "./reportWebVitals";

import AppWithCallbackAfterRender from "./components/AppWithCallbackAfterRender";
// import { articles } from './components/AppWithCallbackAfterRender';

// ReportWebVitals reportWebVitals = new ReportWebVitals();

// reportWebVitals.reportWebVitals(reportWebVitals.sendToAnalytics);

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(AppWithCallbackAfterRender());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals.reportWebVitals();
