import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';

import './styles.css';

const AddressBar = () => (<a-bar>{(window.location.href)}</a-bar>);

const Home = () => (<div>Home</div>);
const Current = () => (<div>Current</div>);

const App = () => (
  <Router>
    <div>
      <AddressBar />
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/current">Current Link</NavLink>
        <NavLink to="/outdated">Outdated Link</NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route strict path="/current" component={Current} />
        <Redirect exact from="/outdated" to="/current" />
      </Switch>
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));
