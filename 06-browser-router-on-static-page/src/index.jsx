import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const About = () => (<div>About (now try refreshing the page)</div>);

const App = () => (
  <BrowserRouter>
    <Link to="/about">About</Link>
    <Route path="/about" component={About} />
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
