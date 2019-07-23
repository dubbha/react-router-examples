import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import AddressBar from '../../common/AddressBar';
import '../../common/styles.css';

const Home = () => (<div>Home</div>);
const About = () => (<div>About</div>);
const Contacts = () => (<div>Contacts</div>);
const NotFound = () => (<div>404: sorry, nothing found</div>);

const App = () => (
  <Router>
    <AddressBar />
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/WAT">Broken Link</NavLink>
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route strict path="/about" component={About} />
      <Route strict path="/contacts" component={Contacts} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById('root'));
