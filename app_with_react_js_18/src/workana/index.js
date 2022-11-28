// reactJS 18 nested packages with web-vitals and typescript
// import {*} from index.ts;

// https://webpack.js.org/guides/getting-started/

console.log("\n npm start packagejson main index.ts yarn powershell\n");

import 8 from './declaration.d.ts';

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import { reportWebVitals } from "./reportWebVitals";

import AppWithCallbackAfterRender from "./components/AppWithCallbackAfterRender";
// import { articles } from './components/AppWithCallbackAfterRender';

// ReportWebVitals reportWebVitals = new ReportWebVitals();

// reportWebVitals.reportWebVitals(reportWebVitals.sendToAnalytics);

export function component() {
    const element = document.createElement("div");

    const filterElement = document.querySelector('header input');
    
    const elementInput = document.querySelectorAll('.cards li');

  // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(["Hello", "webpack"], " ");
    
    elementInput.addEventListener('input', filterCards);
    
    let elementArray = { element, filterCards, elementInput };

  return elementArray;
}

export function filterCards() {
    
    if (filterElement.value !== '') {
        
        for (let card of cards) {
    
            let title = elementInput.querySelector('th');

            title = title.textContent.toLowerCase();
            console.log(title);

            if ( !title.includes(filterText)) {
                card.style.display = "none"
            } else {
                card.style.display = "block"
            }

} // end for loop

    } else {
        
        for (let card of cards) { 
            card.style.display = "block"
        }

    }

} // end function

function index() {

  component();

  document.body.appendChild(component()[2]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(AppWithCallbackAfterRender());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reactJS 18 nested packages web-vitals and typescript es2015
// reportWebVitals.reportWebVitals();
  
} // end function index

export default index;