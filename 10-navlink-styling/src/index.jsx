import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './styles.css';

const AddressBar = () => (<a-bar>{(window.location.href)}</a-bar>);

const Red = () => (<div>Red</div>);
const Green = () => (<div>Green</div>);
const Blue = () => (<div>Blue</div>);

const App = () => (
  <Router>
    <div>
      <AddressBar />
      <nav>
        <NavLink to="/red">Red</NavLink>
        <NavLink to="/green" activeClassName="special">Green</NavLink>
        <NavLink to="/blue" activeStyle={{ backgroundColor: 'blue', color: 'white' }}>Blue</NavLink>
      </nav>
      <main>
        <Route path="/red" component={Red} />
        <Route path="/green" component={Green} />
        <Route path="/blue" component={Blue} />
      </main>
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));
