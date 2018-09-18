import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const About = () => (<div>About (now try refreshing the page)</div>);

const App = () => (
  <BrowserRouter>
    <div>
      <Link to="/about">About</Link>
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
