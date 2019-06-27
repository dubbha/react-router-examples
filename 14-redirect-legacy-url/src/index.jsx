import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';

import AddressBar from '../../common/AddressBar';

const Home = () => (<div>Home</div>);
const Current = () => (<div>Current</div>);

const App = () => (
  <Router>
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
  </Router>
);

render(<App />, document.getElementById('root'));
