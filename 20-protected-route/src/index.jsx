import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';

import './styles.css';

const AddressBar = () => (<a-bar>{(window.location.href)}</a-bar>);

class AuthService {
  constructor() {
    this.auth = false;
  }

  checkAuth() {
    return this.auth;
  }

  login = () => {
    console.log('logging in');
    return new Promise(resolve =>
      setTimeout(() => {
        console.log('logged in!');
        this.auth = true;
        resolve();
      }, 1000));
  }

  logout = () => {
    console.log('logging out');
    return new Promise(resolve =>
      setTimeout(() => {
        console.log('logged out!');
        this.auth = false;
        resolve();
      }, 1000));
  }
}

const authService = new AuthService();

const Login = () => (
  <div>You must log in: <button onClick={authService.login}>Login</button></div>
);

const Admin = () => (
  <div>Welcome to admin zone. <button onClick={authService.logout}>Logout</button></div>
);

const ProtectedRoute = (props) => (
  authService.checkAuth()
    ? (<Admin {...props} />)
    : (<Redirect to="/" />)
);

const App = () => (
  <Router>
    <div>
      <AddressBar />
      <nav>
        <NavLink exact to="/">Login</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </nav>
      <Route exact path="/" component={Login} />
      <Route path="/admin" render={ProtectedRoute}/>
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));
