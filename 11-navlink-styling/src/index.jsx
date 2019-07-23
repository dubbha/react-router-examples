import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, withRouter } from 'react-router-dom';

import AddressBar from '../../common/AddressBar';
import '../../common/styles.css';

const Red = () => (<div>Red</div>);
const Green = () => (<div>Green</div>);
const Blue = () => (<div>Blue</div>);

const App = () => (
  <Router>
    <AddressBar />
    <nav>
      <NavLink to="/red">Red</NavLink>
      <NavLink to="/green" activeClassName="special">Green</NavLink>                                  {/* activeClassName="" */}
      <NavLink to="/blue" activeStyle={{ backgroundColor: 'blue', color: 'white' }}>Blue</NavLink>
    </nav>
    <main>
      <Route path="/red" component={Red} />
      <Route path="/green" component={Green} />
      <Route path="/blue" component={Blue} />
    </main>
  </Router>
);

render(<App />, document.getElementById('root'));
