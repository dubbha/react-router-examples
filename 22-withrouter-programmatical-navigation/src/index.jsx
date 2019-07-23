import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import AddressBar from '../../common/AddressBar';
import '../../common/styles.css';

import Deep from './Deep.jsx';

const Home = () => (<div>Home</div>);
const Away = () => (<div>Went Away!</div>);

const App = () => (
  <Router>
    <AddressBar />
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/deep">Deep</NavLink>
    </nav>
    <Route exact path="/" component={Home} />
    <Route exact path="/away" component={Away} />
    <Route path="/deep" render={Deep}/>
  </Router>
);

render(<App />, document.getElementById('root'));
