import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const User = () => (<h1>User</h1>);

const App = () => (
  <BrowserRouter>
    <Route path={['/user', '/profile']} component={User} />
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
