import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import AddressBar from '../../common/AddressBar';

const Home = () => (<div>Home</div>);

// props used directly
const User = (props) => (<div>User: {props.match.params.username}</div>);

// props destructured
const Book = ({ match }) => (<div>Book: {match.params.title}</div>);

const App = () => (
  <Router>
    <AddressBar />
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/user/joe">/user/joe</NavLink>
      <NavLink to="/user/sam">/user/sam</NavLink>
      <NavLink to="/book/bible">/book/bible</NavLink>
      <NavLink to="/book/kamasutra">/book/kamasutra</NavLink>
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user/:username" component={User}/>
      <Route path="/book/:title" component={Book}/>
    </Switch>
  </Router>
);

render(<App />, document.getElementById('root'));
