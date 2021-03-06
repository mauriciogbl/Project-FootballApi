import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from '../application-components/application';
import Team from '../application-components/team';

const appRoute = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App} />
    </Router>,
    appRoute
)

const NotFound = () => (
    <h1>404.. Page not found!</h1>);
