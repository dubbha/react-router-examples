import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './styles.css';

const AddressBar = () => (<a-bar>{(window.location.href)}</a-bar>);

const Home = () => (<div>Home</div>);

const RenderMeAnyway = ({ match }) => (
  match
    ? (<div>I matched! :)</div>)
    : (<div>I didn't match, but still rendered :(</div>)
);

const App = () => (
  <Router>
    <div>
      <AddressBar />
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/match">Match</NavLink>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/match" children={RenderMeAnyway}/>
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));
