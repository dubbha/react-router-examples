import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';

const About = () => (<div>About (now try refreshing the page)</div>);

const App = () => (
  <HashRouter>
    <Link to="/about">About</Link>
    <Route path="/about" component={About} />
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
