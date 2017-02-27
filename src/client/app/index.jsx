// ./src/index.jsx
import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
// Import custom components
import Home from './layouts/home.component.jsx';
import About from './layouts/about.component.jsx';

window.rootLocale = "/react/";
window.rootLocale = "/";

render(
    <Router history={browserHistory}>
        <Route path={rootLocale}>
            <IndexRoute component={Home} />
            <Route path="about" component={About}></Route>
        </Route>
    </Router>,
    document.getElementById('container')
);