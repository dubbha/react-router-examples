import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Deep from './Deep.jsx';

import './styles.css';

const AddressBar = () => (<a-bar>{(window.location.href)}</a-bar>);

const Home = () => (<div>Home</div>);
const Away = () => (<div>Went Away!</div>);

const App = () => (
  <Router>
    <div>
      <AddressBar />
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/deep">Deep</NavLink>
      </nav>
      <Route exact path="/" component={Home} />
      <Route exact path="/away" component={Away} />
      <Route path="/deep" render={Deep}/>
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));
