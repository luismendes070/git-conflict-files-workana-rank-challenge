import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

// import LogRocket from 'logrocket';
// component, filtercards,
import { index } from './workana/index.js';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

LogRocket.init('izrzoo/hello-world');

// This is an example script - don't forget to change it!
LogRocket.identify('THE_USER_ID_IN_YOUR_APP', {
  name: 'James Morrison',
  email: 'jamesmorrison@example.com',

  // Add your own custom user variables here, ie:
  subscriptionType: 'pro'
});

// after calling LogRocket.init()
setupLogRocketReact(LogRocket);

index();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
