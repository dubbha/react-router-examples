import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

const Home = () => (<h1>Home</h1>);
const About = () => (<h1>About</h1>);

const App = () => (
  <BrowserRouter>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
