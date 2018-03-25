import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';

import './styles.css';

const AddressBar = () => (<a-bar>{(window.location.href)}</a-bar>);

const Home = () => (<div>Home</div>);

// props used directly
const User = (props) => (<div>User: {props.match.params.username}</div>);

// props destructured
const Book = ({ match }) => (<div>Book: {match.params.title}</div>);

const App = () => (
  <Router>
    <div>
      <AddressBar />
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/user/joe">/user/joe</NavLink>
        <NavLink to="/user/sam">/user/sam</NavLink>
        <NavLink to="/book/bible">/book/bible</NavLink>
        <NavLink to="/book/kamasutra">/user/kamasutra</NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user/:username" component={User}/>
        <Route path="/book/:title" component={Book}/>
      </Switch>
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));
