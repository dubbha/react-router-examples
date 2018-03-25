import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const About = () => (<div>About</div>);

const App = () => (
  <Router>
    <div>
      <Link to='/about' replace>
        About
      </Link>
      <Route path="/about" component={About} />
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));
