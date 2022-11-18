require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});

import { Articles } from './Articles';
// import { ArticlesType } from './index';
// export type articles{
   // articles: ArticlesType[];
// }

import {useEffect} from "react";

import { server } from ".././server";

// ES modules
// import * as ReactDOMServer from 'react-dom/server';
server();
// typescript 2305
// import {Date} from 'typescript';

// import React from 'react';
// import * as ReactDOM from "react-dom/client";
import createRoot from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from '.././registerServiceWorker';
import {applyPolyfills, defineCustomElements} from 'h8k-components/loader';

export interface ArticlesType{
  title: string;
  upvotes: number;
  date: string;
}

const articlesSort = (mostUpvotes: ArticlesType, lessUpvotes: ArticlesType) => {
  
  if (mostUpvotes.upvotes < lessUpvotes.upvotes) {
    return 1;
  }

  if (mostUpvotes.upvotes > lessUpvotes.upvotes) {
    return -1;
  }
 else {
    if(mostUpvotes.title > lessUpvotes.title){
      return 1;
    }
    if(mostUpvotes.title < lessUpvotes.title){
      return -1;
    }
  }

};

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
// ordenado.push(ARTICLES[6]);
// ordenado.push(ARTICLES[3]);

let joinsort = articlesSort(ARTICLES);

// joinsort = joinsort.upvotes.sort();

console.log(joinsort);

// After https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
export function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered');
  });

  return Articles({ ordenado });
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  AppWithCallbackAfterRender()
);

// https://www.w3schools.com/react/react_conditional_rendering.asp
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(document.getElementById("root"), <App articles={ ordenado } />);

registerServiceWorker();

applyPolyfills().then(() => {
    defineCustomElements(window);
})


export default AppWithCallbackAfterRender;