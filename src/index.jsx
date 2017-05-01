import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
// import Home from './components/Home.jsx';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { BrowserRouter, HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('react-root')
);  