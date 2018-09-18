import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './styles.css';

const AddressBar = () => (<a-bar>{(window.location.href)}</a-bar>);

const About = () => (<div>About</div>);

const App = () => (
  <Router>
    <div>
      <AddressBar />
      <Link to='/about' replace>
        About
      </Link>
      <Route path="/about" component={About} />
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));
