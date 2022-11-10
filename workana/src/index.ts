require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});

// ES modules
import * as ReactDOMServer from 'react-dom/server';
// typescript 2305
// import {Date} from 'typescript';

import React from 'react';
import * as ReactDOM from "react-dom/client";
import createRoot from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyPolyfills, defineCustomElements} from 'h8k-components/loader';

export interface ArticlesType{
  title: string;
  upvotes: number;
  date: Date;
}

const ARTICLES:ArticlesType = [
  {
    title: "A message to our customers",
    upvotes: 12,
    date: "2020-01-24",
  },
  {
    title: "Alphabet earnings",
    upvotes: 22,
    date: "2019-11-23",
  },
  {
    title: "Artificial Mountains",
    upvotes: 2,
    date: "2019-11-22",
  },
  {
    title: "Scaling to 100k Users",
    upvotes: 72,
    date: "2019-01-21",
  },
  {
    title: "the Emu War",
    upvotes: 24,
    date: "2019-10-21",
  },
  {
    title: "What's SAP",
    upvotes: 1,
    date: "2019-11-21",
  },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 7,
    date: "2010-12-31",
  },
];

let ordenado:ArticlesType[] = [];

// typescript error code 2339
ordenado.push(ARTICLES[6]);
ordenado.push(ARTICLES[3]);

// https://www.w3schools.com/react/react_conditional_rendering.asp
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(document.getElementById("root"), <App articles={ ordenado } />);

registerServiceWorker();

applyPolyfills().then(() => {
    defineCustomElements(window);
})


export default index;
