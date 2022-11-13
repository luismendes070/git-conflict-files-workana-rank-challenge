import { ArticlesType } from "./components/AppWithCallbackAfterRender";

// import { ArticlesType } from './index.ts';

import React from 'react';
import './App.css';
import 'h8k-components';


const title = "Sorting Articles";



export function App() {

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                <button data-testid="most-recent-link" className="small">Most Recent</button>
            </div>
            <AppWithCallbackAfterRender />
        </div>
    );

}

export default App;
