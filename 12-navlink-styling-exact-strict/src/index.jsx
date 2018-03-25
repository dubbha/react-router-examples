import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import './styles.css';

const AddressBar = () => (<a-bar>{(window.location.href)}</a-bar>);

const Home = () => (<div>Home</div>);
const About = () => (<div>About</div>);
const Contacts = () => (<div>Contacts</div>);

const App = () => (
  <Router>
    <div>
      <AddressBar />
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink strict to="/about/">About</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route strict path="/about/" component={About} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));
