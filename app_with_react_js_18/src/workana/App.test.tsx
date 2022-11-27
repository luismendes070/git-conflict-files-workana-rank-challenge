require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});

import { ArticlesType } from "./components/AppWithCallbackAfterRender";

import React from "react";
import App from "./App";
import { render, within, fireEvent, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

const testIds = {
  mostUpvotedLink: "most-upvoted-link",
  mostRecentLink: "most-recent-link",
  article: "article",
};

const articles = [
  {
    title: "Alphabet earnings",
    upvotes: 22,
    date: "2011-11-23",
  },
  {
    title: "Artificial Mountains",
    upvotes: 200,
    date: "2019-11-23",
  },
  {
    title: "Scaling to 100k Users",
    upvotes: 72,
    date: "2019-10-21",
  },
  {
    title: "A message to our customers",
    upvotes: 12,
    date: "2019-10-22",
  },
  {
    title: "the Emu War",
    upvotes: 24,
    date: "2018-04-01",
  },
  {
    title: "What's SAP",
    upvotes: 1,
    date: "2017-01-21",
  },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 83,
    date: "2020-02-22",
  },
];



// SORTED 1 N

const sortedArticles1tillN = [
  {
    title: "What's SAP",
    upvotes: 1,
    date: "2017-01-21",
  },
  {
    title: "A message to our customers",
    upvotes: 12,
    date: "2019-10-22",
  },
  {
    title: "Alphabet earnings",
    upvotes: 22,
    date: "2011-11-23",
  },
  {
    title: "the Emu War",
    upvotes: 24,
    date: "2018-04-01",
  },
  {
    title: "Scaling to 100k Users",
    upvotes: 72,
    date: "2019-10-21",
  },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 83,
    date: "2020-02-22",
  },
  {
    title: "Artificial Mountains",
    upvotes: 200,
    date: "2019-11-23",
  },
];

// SORTED N 1

const sortedArticlesNTill1 = [
  {
    title: "Artificial Mountains",
    upvotes: 200,
    date: "2019-11-23",
  },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 83,
    date: "2020-02-22",
  },
  {
    title: "Scaling to 100k Users",
    upvotes: 72,
    date: "2019-10-21",
  },
  {
    title: "the Emu War",
    upvotes: 24,
    date: "2018-04-01",
  },
  {
    title: "Alphabet earnings",
    upvotes: 22,
    date: "2011-11-23",
  },
  {
    title: "A message to our customers",
    upvotes: 12,
    date: "2019-10-22",
  },
  {
    title: "What's SAP",
    upvotes: 1,
    date: "2017-01-21",
  },
];

const mostUpvotedArticles = articles.concat().sort((a, b) => {
  if (a.upvotes > b.upvotes) {
    return -1;
  }
  if (a.upvotes < b.upvotes) {
    return 1;
  }
  return 0;
});

const mostRecentArticles = articles.concat().sort((a, b) => {
  const aDate = new Date(a.date);
  const bDate = new Date(b.date);
  if (aDate > bDate) {
    return -1;
  }
  if (aDate < bDate) {
    return 1;
  }
  return 0;
});

const renderApp = () => render(<App />);

beforeEach(() => {});

afterEach(() => {
  cleanup();
});

const expectArticles = (
  articles: ArticlesType[],
  expectedArticles: ArticlesType[]
) => {
  expect(articles).toHaveLength(expectedArticles.length);

  articles.forEach((article: ThisParameterType<typeof articles[0].id>, i:number) => {
    
    const title = within(articles[0].title).getByTestId("article-title").textContent;
    
    const upvotes = within(articles[0].upvotes).getByTestId("article-upvotes").textContent;
  
    const date = within(articles[0].date).getByTestId("article-date").textContent;
  
    const expectedArticle = sortedArticles1tillN[0];  // expectedArticles[i];
  
    expect([title, upvotes, date]).toEqual([
      expectedArticle.title,
      expectedArticle.upvotes.toString(),
      expectedArticle.date,
    ]);
});
  
};

test("Initial articles render correctly", () => {
  const { getByTestId, queryAllByTestId } = renderApp();

  const articles = queryAllByTestId(testIds.article);
  expectArticles(articles, mostUpvotedArticles);
});

// test sorted articles 1 N
test("test sorted articles 1 N", () => {
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#examples
let joinsort = articles;

joinsort = joinsort.join().sort();

console.log(joinsort);

  fail(true);
});

// test sorted articles n 1
test("test sorted articles n 1", () => {
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#examples
let joinsort = articles;

joinsort = joinsort.join().sort();

console.log(joinsort);

  fail(true);
});

test("Clicking on top renders expected articles", () => {
  const { getByTestId, queryAllByTestId } = renderApp();

  const mostUpvotedLink = getByTestId(testIds.mostUpvotedLink);
  fireEvent.click(mostUpvotedLink);

  const articles = queryAllByTestId(testIds.article);
  expectArticles(articles, mostUpvotedArticles);
});

test("Clicking on newest renders expected articles", () => {
  const { getByTestId, queryAllByTestId } = renderApp();

  const mostRecentLink = getByTestId(testIds.mostRecentLink);
  fireEvent.click(mostRecentLink);

  const articles = queryAllByTestId(testIds.article);
  expectArticles(articles, mostRecentArticles);
});

test("Sequence of navigation clicks renders expected artices", () => {
  const { getByTestId, queryAllByTestId } = renderApp();

  const mostUpvotedLink = getByTestId(testIds.mostUpvotedLink);
  const mostRecentLink = getByTestId(testIds.mostRecentLink);

  const elements = [
    mostRecentLink,
    mostUpvotedLink,
    mostUpvotedLink,
    mostRecentLink,
    mostRecentLink,
    mostUpvotedLink,
  ];
  for (const elem of elements) {
    fireEvent.click(elem);
    const articles = queryAllByTestId(testIds.article);
    const expectedArticles =
      elem === mostUpvotedLink ? mostUpvotedArticles : mostRecentArticles;
    expectArticles(articles, expectedArticles);
  }
});
