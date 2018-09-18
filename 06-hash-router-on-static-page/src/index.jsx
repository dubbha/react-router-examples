import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';

const About = () => (<div>About (now try refreshing the page)</div>);

const App = () => (
  <HashRouter>
    <div>
      <Link to="/about">About</Link>
      <Route path="/about" component={About} />
    </div>
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
