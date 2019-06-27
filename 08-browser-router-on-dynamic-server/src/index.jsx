import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const About = () => (<div>About (now try refreshing the page)</div>);

const App = () => (
  <BrowserRouter>
    <Link to="/about">About</Link>
    <Route path="/about" component={About} />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
