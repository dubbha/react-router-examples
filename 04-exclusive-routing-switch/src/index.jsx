import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = () => (<h1>Home</h1>);
const Users = () => (<h1>Users</h1>);
const UsersAdd = () => (<h1>UsersAdd</h1>);

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/users/add" component={UsersAdd} />
      <Route path="/users" component={Users} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
