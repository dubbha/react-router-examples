import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import AddressBar from '../../common/AddressBar';
import '../../common/styles.css';

const About = () => (<div>About</div>);

const App = () => (
  <Router>
    <AddressBar />
    <Link to='/about' replace>
      About
    </Link>
    <Route path="/about" component={About} />
  </Router>
);

render(<App />, document.getElementById('root'));
