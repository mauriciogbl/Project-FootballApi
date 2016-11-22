import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from '../application-components/application';

const appRoute = document.getElementById('app');

 ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={App} />
    </Router>,
  appRoute
)

const NotFound = () => (
 <h1>404.. Page not found!</h1>);
