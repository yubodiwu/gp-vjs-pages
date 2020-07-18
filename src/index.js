import React from 'react';
import { render } from 'react-snapshot';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CloudflareStream from './CloudflareStream';

render(
  <React.StrictMode>
    <CloudflareStream />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
